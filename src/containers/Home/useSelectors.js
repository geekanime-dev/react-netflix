import { useSelector } from 'react-redux'

export const useHomeSelectors = () => {
    return useSelector(state => state.home)
}
