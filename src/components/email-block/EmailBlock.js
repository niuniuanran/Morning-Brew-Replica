import React from "react";
import { Box, Text, Heading } from "grommet";
import { TextField } from "@material-ui/core";
import theme from "../../theme";
import Button from "./Button";

const { colors } = theme;

const EmailBlock = () => {
  return (
    <Box
      elevation={"large"}
      width={"500px"}
      height={{ min: "max-content" }}
      round="8px"
      background={colors.white}
      pad={"large"}
      gap={"medium"}
    >
      <Heading level={1} color={colors.black}>
        Become smarter in just 5 minutes
      </Heading>
      <Text size={"medium"}>
        Get the daily email that makes reading the news actually enjoyable. Stay
        informed and entertained, for free.
      </Text>
      <TextField
        id="outlined-basic"
        type={"email"}
        label={"Enter your email"}
        placeholder={"Enter your email"}
        variant="outlined"
      />
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
        // disabled={isProcessing || !isValid}
        background={colors.primary}
        color={colors.white}
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem"
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default EmailBlock;