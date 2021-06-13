import { configureStore } from "@reduxjs/toolkit";
import addBlockSlice from "./SectionTemplateModal/selectedTemplateSlice";
import editorSlice from "./Editor/EditorSlice";

const store = configureStore({
  reducer: {
    blocks: addBlockSlice,
    editor: editorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
