import { useSelector, useDispatch } from 'react-redux';
import {
  error,
  success,
  selectMsgError,
  selectMsgSuccess,
} from '../redux/msgSlice';

export default function Model() {

    const msgError = useSelector(selectMsgError);
    const msgSuccess = useSelector(selectMsgSuccess);
    const dispatch = useDispatch();

    return (
        msgSuccess ? (
            <div className="modal">
                <div className="modal_wrapper" >
                    <div className="modal_header modal_success_header">
                        <h3 className="text text-title">Yaay!</h3>
                    </div>
                    <section className="modal_content">
                        <p>Your Fault report has been submitted successfully!</p>
                    </section>
                    <div className="modal_footer">
                        <button onClick={() => dispatch(success())}>close</button>
                    </div>
                </div>
            </div>
        ) : (
            msgError ? (
                <div className="modal">
                    <div className="modal_wrapper" >
                        <div className="modal_header modal_error_header">
                            <h3 className="text text-title">An error occured</h3>
                        </div>
                        <section className="modal_content">
                            <p>Something went wrong. please make sure all input are filled properly</p>
                        </section>
                        <div className="modal_footer">
                            <button onClick={() => dispatch(error())}>close</button>
                        </div>
                    </div>
                </div>
            ) : null
        )
    )
}
