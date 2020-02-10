import { UpdateNewMessagesCreator, CreateMessagesCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage

    }
}
let mapDispatchtoProps = (dispatch) => {
        return {
            updateNewMessageBody: (body) => {
                dispatch(CreateMessagesCreator(body));

            },
            sendMessage: () => {
                dispatch(UpdateNewMessagesCreator());

            },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchtoProps)(Dialogs);



export default DialogsContainer;