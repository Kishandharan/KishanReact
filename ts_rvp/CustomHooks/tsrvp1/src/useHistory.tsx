import {useRef} from 'react';

function useHistory(historyFunction, historyFunctionArguments){
    let history = useRef<Map<any[], any>>();

    if(history.current.has(historyFunctionArguments)){
        return history.current.get(historyFunctionArguments);
    }else{
        let historyFunctionResult = historyFunction(...historyFunctionArguments);
        history.current.set(historyFunctionArguments, historyFunctionResult);
        return historyFunctionResult;
    } 

}

export default useHistory


