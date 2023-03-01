import api from '../service'
import { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy';

const UseData = (baseUrl) => {

    const storeState = useStoreState(state => state.data.data)
    const storeAction = useStoreActions(action => action.data)
    
    const fetchData = async (customUrl) => {
        const response = await api.get(customUrl);
        storeAction.setData({
            key: customUrl,
            value: response.data.data
        })
    };

    useEffect(() => {
        if (!storeState[baseUrl]) {
            fetchData(baseUrl);
        }
    }, []);

    return {
        data: storeState[baseUrl],
    }
}

export default UseData
