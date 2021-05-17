import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
  ArrayField,
  ChipField,
  SingleFieldList,
  ReferenceArrayField,
  ReferenceArrayInput,
  SelectArrayInput,
  required
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const GroupFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const GroupList = (props) => (
  <List {...props} filters={<GroupFilter />}>
    <Datagrid>
      <TextField source="name" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const GroupShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);

export const GroupCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="name" validate={required("You must specify a name")}/>
    </SimpleForm>
  </Create>
);

export const GroupEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
    <TextInput source="name" validate={required("You must specify a name")}/>
    </SimpleForm>
  </Edit>
);