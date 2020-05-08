// Utils
const getById = (id) => document.getElementById(id);

let allUsers = [];
let isInEditMode = false;

// Main elements
let addButton = getById("add-button");

const usersListContainer = getById("users-list");

// Form input elements
const first_nameInput = getById("first_name");
const last_nameInput = getById("last_name");
const emailInput = getById("email");
const passwordInput = getById("password");
const jobTitleInput = getById("jobTitle");


const renderItem = (values) => {
  return `
  <li class="users-item" id="${values.id}">
    <div class="field">${values.firstName}</div>
    <div class="field">${values.lastName}</div>
    <div class="field">${values.email}</div>
    <div class="field">${values.password}</div>
    <div class="field">${values.jobTitle}</div>
    <button class="filed-edit" onClick="onItemEditClick('${values.id}')">Edit</button>
    <button class="filed-delete" onClick="onItemDeleteClick('${values.id}')">Delete</button>
  </li>
  `;
};

const clearInputs = () => {
  first_nameInput.value = "";
  last_nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  jobTitleInput.value = "";
};

const clearContainer = () => {
  usersListContainer.innerHTML = "";
};

const renderAllItems = async () => {
  clearContainer();

  const users = await Api.fetchAllUsers();

  allUsers=users;

  users.forEach((users) => {
    usersListContainer.insertAdjacentHTML("afterbegin", renderItem(users));
  });
};

const switchEditAddMode = (isEdit, id) => {
  addButton.innerHTML = isEdit ? "Edit" : "Add";
  isInEditMode = isEdit;

  const updatedButton = addButton.cloneNode(true);
  addButton.parentNode.replaceChild(updatedButton, addButton);
  addButton = updatedButton;

  addButton.addEventListener(
    "click",
    isEdit ? () => onSubmitEditClicked(id) : onAddItemClick
  );
};

const onItemEditClick = (id) => {
  const foundUser = allUsers.find((users) => +id === +users.id);

  first_nameInput.value = foundUser.firstName;
  last_nameInput.value = foundUser.lastName;
  emailInput.value = foundUser.email;
  passwordInput.value = foundUser.password;
  jobTitleInput.value = foundUser.jobTitle;

  switchEditAddMode(true, id);
};

const onItemDeleteClick = (id) => {
  Api.deleteUsers(id);

  renderAllItems();
};

const onAddItemClick = () => {
  const item = {
    firstName: first_nameInput.value,
    lastName: last_nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    jobTitle: jobTitleInput.value,
  };

  Api.uploadUsers(item);

  clearInputs();

  renderAllItems();
};

const onSubmitEditClicked = (id) => {
  const updatedItem = {
    firstName: first_nameInput.value,
    lastName: last_nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    jobTitle: jobTitleInput.value,
  };

  Api.editUsers(id, updatedItem);

  clearInputs();

  renderAllItems();

  switchEditAddMode(false);
};

addButton.addEventListener("click", onAddItemClick);
renderAllItems();
