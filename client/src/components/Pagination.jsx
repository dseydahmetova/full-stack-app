import { useEffect } from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { getAllPlaces } from '../services/placeService'
import { useState } from 'react'

const Paginate = ({ page }) => {
    const classes = useStyles()
    const [totalnumberOfPages, setTotalnumberOfPages] = useState(0);

    useEffect(() => {
        async function loadData() {
            if (page) {
                const result = await getAllPlaces(page)
                setTotalnumberOfPages(result.totalnumberOfPages)
            }
        }

        loadData()
    }, [page])

    return (
        <Pagination
            classes={{ ul: classes.ul }}
            className="pagination"
            count={totalnumberOfPages}
            page={Number(page) || 1}
            variant='outlined'
            color='primary'
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/places?page=${item.page}`} />
            )}
        />
    )
}

export default Paginate