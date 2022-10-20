import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Routes
  } from "react-router-dom";
import ReportDetail from '../page/Report';
import Dashboard from '../page/Dashboard';
import MainPotential from '../page/Potential';
import MainPerformance from '../page/Performance';
import FormPotential from '../page/Potential/FormPotential';
import CompareAssessments from '../page/CompareAssesment';
import ResultReport from '../page/Performance/resultReport';
import SubResultReport from "../page/subPerformance/subResultReport";
import SubPerformance from "../page/subPerformance";


const RoutePath = () => (

            <Switch>
                <Route  path="/dashboard/:id" component={Dashboard}/>
                <Route  path="/dashboard" component={Dashboard}/>
                <Route  path="/potential/assessment/:list/:value" component={FormPotential}/>
                <Route  path="/performance/assessment" component={MainPerformance}/>
                <Route  path="/potential/report" component={ReportDetail}/>
                <Route  path="/potential/" component={MainPotential}/>
                <Route  path="/performance/report" component={ResultReport}/>
                <Route  path="/subPerformance/report" component={SubResultReport}/>
                <Route  path="/performance/" component={MainPerformance}/>
                <Route  path="/subPerformance/" component={SubPerformance}/>
                <Route  path="/Compare_assessments" component={CompareAssessments}/>
            </Switch>

)


export default RoutePath;