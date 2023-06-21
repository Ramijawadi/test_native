import {StyleSheet} from 'react-native';
import {PADDING} from '../../outils/Constantes';

export const styles = StyleSheet.create = ({
  messagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
    marginTop: 15,
    paddingVertical: PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
  },
  messageImg: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 15,
  },

  messageInfo: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
  },

  date_name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
});
 
