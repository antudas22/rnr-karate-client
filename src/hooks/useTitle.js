import { useEffect } from 'react';

const useTitle = title => {
        useEffect( () => {
            document.title = `${title} - RNR G. Int. Karate Academy`;
        }, [title])
    };

export default useTitle;