import { useEffect } from "react";


  const useCleanComponent = (observerTargetRef: React.MutableRefObject<IntersectionObserver | null>) =>{

    useEffect(() => {
        return () => {
          if (observerTargetRef.current) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            observerTargetRef.current.disconnect();
          }
        };
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
}

export default useCleanComponent