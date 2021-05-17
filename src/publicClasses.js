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

const ClassFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const ClassList = (props) => (
  <List {...props} filters={<ClassFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="groupName" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const ClassShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="groupName" />
      <ReferenceArrayField label="Teachers" reference="users" source="teachers">
        <SingleFieldList>
            <ChipField source="username" />
        </SingleFieldList>
      </ReferenceArrayField>      
      <TextField source="createdAt" />
    </SimpleShowLayout>
  </Show>
);

export const ClassCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="name" validate={required("You must specify a name")}/>
      <TextInput source="shortName" validate={required("You must specify a short name")}/>
      <ReferenceInput label="Group" source="groupName" reference="groups">
        <SelectInput optionText="name" optionValue="name" validate={required("You must specify a group")}/>
      </ReferenceInput>
      <ReferenceArrayInput label="Teachers" source="teachers" reference="users">
        <SelectArrayInput optionText="username" />
      </ReferenceArrayInput>
      
      {/* <ReferenceInput label="Teachers" source="teachers" reference="users">
      <AutocompleteArrayInput source="category" choices={[
    { id: 'programming', name: 'Programming' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'photography', name: 'Photography' },
]} />
        <SelectInput optionText="username" optionValue="username"/>
      </ReferenceInput>       */}
    </SimpleForm>
  </Create>
);

export const ClassEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
    <TextInput source="name" validate={required("You must specify a name")}/>
      <TextInput source="shortName" validate={required("You must specify a short name")}/>
      <ReferenceInput label="Group" source="groupName" reference="groups">
        <SelectInput optionText="name" optionValue="name" validate={required("You must specify a group")}/>
      </ReferenceInput>
      <ReferenceArrayInput label="Teachers" source="teachers" reference="users">
        <SelectArrayInput optionText="username" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);
