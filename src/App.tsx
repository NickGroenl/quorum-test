import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";
import Dashboard from "./routes/dashboard";
import CreateVotation from "./routes/votation";
import PrivacyPolicy from "./routes/resources/privacy";
import FrequentQuestions from "./routes/resources/fq";
import LoginView from "./routes/hub/access/login";
import ForgotView from "./routes/hub/access/forgot";
import { useState, useEffect } from "react";
import { useAppDispatch } from "./hooks/store/store";

import { GetUserData } from "./hooks/api/api.user";
import HomeHub from "./routes/hub/home";
const App = () =>  {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      await GetUserData(dispatch);
      setLoading(true);      
    })();
  }, []);
  return (
        <>
          {isLoading ? <Router>
            
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/login" element={<LoginView/>}></Route>
              <Route path="/forgot" element={<ForgotView/>}/>

              <Route path="/privacy-rules" element={<PrivacyPolicy/>}></Route>
              <Route path="/fq" element={<FrequentQuestions/>}></Route>
              <Route path="/create" element={<CreateVotation/>}/>
              <Route path="/hub" element={<HomeHub/>}/>

            </Routes>
        </Router>
        : <></>}
        </>
          
  );
}

export default App;
