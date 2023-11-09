export enum EnumSelector {
  Default = "",
  Category = "category",
  Location = "location",
  Title = "title",
  Description = "description",
  Value = "value",
}
export const ACTIONS = {
  ADD_IMAGES: "add-images",
  TOGGLE_MODAL: "toggle-modal",
  ADD_SELECTION: "add-selection",
  ADD_FIELD: "add-field",
  ADD_ARTICLE: "add-article",
  ADD_KEYIMAGE: "add-keyimage",
  CLEAR_UPLOAD: "clear-upload",
};
export const initialState = {
  images: [],
  toggle: false,
  category: "",
  location: "",
  title: "",
  description: "",
  value: "",
  isPosting: false,
  selector: EnumSelector.Default,
};

export const reducer = (upload, action) => {
  switch (action.type) {
    case ACTIONS.ADD_IMAGES: {
      return { ...upload, images: action.payload.images };
    }
    case ACTIONS.ADD_SELECTION: {
      return {
        ...upload,
        [upload.selector]: action.payload.selection,
      };
    }
    case ACTIONS.TOGGLE_MODAL: {
      return {
        ...upload,
        toggle: action.payload.toggle,
        selector: action.payload.selector,
      };
    }
    case ACTIONS.ADD_FIELD: {
      return {
        ...upload,
        selector: action.payload.selector,
        [action.payload.selector]: action.payload.text,
      };
    }
    case ACTIONS.ADD_ARTICLE: {
      return {
        ...upload,
        isUploading: action.payload.toggle,
      };
    }
    case ACTIONS.ADD_KEYIMAGE: {
      return {
        ...upload,
        keyImages: [...upload.keyImages, action.payload.image],
      };
    }
    case ACTIONS.CLEAR_UPLOAD: {
      return action.payload;
    }

    default:
      return upload;
  }
};
