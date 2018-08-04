import apiStatusChange from '../redux/actions';

export default key => ({
  statusChange: (status, payload, requestArgs) => 
    apiStatusChange(key, status, payload, requestArgs),
})
