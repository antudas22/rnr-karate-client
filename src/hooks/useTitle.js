import { useEffect } from 'react';

const useTitle = title => {
        useEffect( () => {
            document.title = `${title} - RNR G. Karate Academy`;
        }, [title])
    };

export default useTitle;