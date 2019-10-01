import { handleActions } from 'redux-actions';
import axios from 'axios';

import { FETCH_MEMBER_INFO } from '../constants/action_types';
export const fetch = () => ({ type: FETCH_MEMBER_INFO });

var config = {
    headers: {'Access-Control-Allow-Origin': '*'},
    retry: { retries: 3 }
};

  
const initialState = {
    pending: false,
    error: false,
    data: {
        list : []
    }
};

function getMemberAPI() {
    axios.interceptors.response.use(response => response, error => {
        const status = error.response ? error.response.status : null
        console.log(error)
        if (status === 500) {
    
            return axios.request(error.config);
        }
    
        return Promise.reject(error);
    })
    return axios.get('http://localhost:8080/members',config)
}


const GET_MEMBER = 'GET_MEMBER';
const GET_MEMBER_PENDING = 'GET_MEMBER_PENDING';
const GET_MEMBER_SUCCESS = 'GET_MEMBER_SUCCESS';
const GET_MEMBER_FAILURE = 'GET_MEMBER_FAILURE';

export const getMember = () => ({
    type: GET_MEMBER,
    payload: getMemberAPI()
})

// export const getMember = () => dispatch => {
//     // 먼저, 요청이 시작했다는것을 알립니다
//     dispatch({type: GET_MEMBER_PENDING});

//     // 요청을 시작합니다
//     // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다
//     return getMemberAPI().then(
//         (response) => {
//             // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
//             dispatch({
//                 type: GET_MEMBER_SUCCESS,
//                 payload: response
//             })
//         }
//     ).catch(error => {
//         // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
//         dispatch({
//             type: GET_MEMBER_FAILURE,
//             payload: error
//         });
//     })

// }


export default handleActions({
    [GET_MEMBER_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        };
    },
    [GET_MEMBER_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: {
                list : action.payload.data
            }
        };
    },
    [GET_MEMBER_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);