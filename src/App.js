import * as React from "react";

import { ClassList, ClassShow, ClassCreate, ClassEdit } from "./publicClasses";
import { GroupCreate, GroupEdit, GroupShow, GroupList} from "./groups";
import { UserList } from "./users";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import CommentIcon from '@material-ui/icons/Comment';
import CustomLoginPage from './CustomLoginPage';

import { firebaseConfig as config } from './firebase-config';

const options = {
  logging: true,
  renameMetaFields: {
    created_at: 'createdAt', // default: 'createdate'
    // created_by: 'my_created_by', // default: 'createdby'
    updated_at: 'updatedAt', // default: 'lastupdate'
    // updated_by: 'my_updated_by', // default: 'updatedby'
  },
  metaFieldCasing: 'camel',
  associateUsersById: true
  // rootRef: 'root_collection/some_document'
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={CustomLoginPage} 
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          name="publicClasses"
          options={{ label: 'Public Classes' }}
          list={ClassList}
          show={ClassShow}
          create={ClassCreate}
          edit={ClassEdit}
        />

        <Resource
          name="groups"
          list={GroupList}
          show={GroupShow}
          create={GroupCreate}
          edit={GroupEdit}
        />
        <Resource
          name="users"
          list={UserList}
        />        
      </Admin>
    );
  }
}

export default App;
