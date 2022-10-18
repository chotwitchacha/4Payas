import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import ReportDetail from '../page/Report';
import Dashboard from '../page/Dashboard';
import MainPotential from '../page/Potential';
import MainPerformance from '../page/Performance';
import FormPotential from '../page/Potential/FormPotential';
import CompareAssessments from '../page/CompareAssesment';
import ResultReport from '../page/Performance/resultReport';


const RoutePath = () => (

            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route  path="/dashboard" component={Dashboard}/>
                <Route  path="/Compare_assessments" component={CompareAssessments}/>
                <Route  path="/potential/assessment/:list/:value" component={FormPotential}/>
                <Route  path="/performance/assessment" component={MainPerformance}/>
                <Route  path="/potential/report" component={ReportDetail}/>
                <Route  path="/potential/" component={MainPotential}/>
                <Route  path="/performance/report" component={ResultReport}/>
                <Route  path="/performance/" component={MainPerformance}/>

            </Switch>
)


export default RoutePath;