import { Button, TextField } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <div>
      <form
        className="text-center p-4 shadow-lg"
        style={{ width: "50%", margin: "5% auto" }}
      >
        <TextField
          id="standard-basic"
          label="Full Name"
          variant="standard"
          className="mx-4"
        />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <br />
        <TextField
          id="standard-basic"
          label="Phone"
          sx={{ width: "100%" }}
          variant="standard"
        />{" "}
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          sx={{ width: "100%", marginBottom: 5 }}
          variant="standard"
        />{" "}
        <br />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#E83A14",
            color: "white",
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact;
