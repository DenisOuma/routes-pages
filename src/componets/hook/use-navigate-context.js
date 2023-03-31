import { useContext } from "react";
import NavigationContext from "../../context/navigation";

function useNavigateContext() {
	return useContext(NavigationContext);
}

export default useNavigateContext;
