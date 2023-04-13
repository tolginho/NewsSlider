import {
  WbModal,
  WbModalLevel,
  WbButton,
  WbRadioButton,
  WbText,
  WbInput
} from "@workbench/react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div className="App">
      <WbButton onClick={toggleOpen}>Toggle Modal</WbButton>
      {open && (
        <WbModal
          variant="edit"
          close-on-backdrop-click
          close-on-escape-key
          scroll-lock
          onWbclose={toggleOpen}
        >
          <WbModalLevel headline="Select your address">
            <WbRadioButton checked>
              <WbText size="l" strong tag="span">
                Maximilian Mustermann
              </WbText>
              <br />
              <span>Musterstr. 12</span>
              <br />
              <span>70174 Stuttgart</span>
              <br />
              <span>Deutschland</span>
            </WbRadioButton>
            <WbButton size="m" variant="secondary" class="wb-margin-top-s">
              Add an address
            </WbButton>

            <WbButton slot="footer" type="button" variant="secondary" size="l">
              Cancel
            </WbButton>
            <WbButton slot="footer" type="button" variant="primary" size="l">
              Send
            </WbButton>
          </WbModalLevel>
        </WbModal>
      )}
    </div>
  );
}
