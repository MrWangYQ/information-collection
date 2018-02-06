import Begin from '../components/begin/begin.jsx';
import Sex from '../components/sex/sex.jsx';
import Question from '../components/question/question.jsx';
import HistoryMedical from '../components/history/history.jsx';
import AllergenicRood from '../components/allergenicFood/allergenicFood.jsx';
import DislikeFood from '../components/dislikeFood/dislikeFood.jsx';
import Feel from '../components/feel/feel.jsx';
let RouteConfig = {
    routes: [
        {
            path: '/begin',
            component: Begin
        },
        {
            path: '/sex',
            component: Sex
        },
        {
            path: '/question',
            component: Question,
            children: [
                {
                    path: '/question/historymedical',
                    component: HistoryMedical
                },
                {
                    path: '/question/allergenicfood',
                    component: AllergenicRood
                },
                {
                    path: '/question/dislikefood',
                    component: DislikeFood
                },
                {
                    path: '/question/feel',
                    component: Feel
                }
            ]
        }
    ]
};
export default RouteConfig;