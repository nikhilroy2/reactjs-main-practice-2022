import React, { useState } from "react";
import { DatePicker, Button, message, Alert, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
message.warning("Please wait");
function AntDesign(props) {
  const [date, setDate] = useState(null);

  const handleDate = (value) => {
    console.log(value);
    message.success(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };

  return (
    <div id="AntDesign" style={{ margin: "5rem" }}>
      <DatePicker onChange={handleDate}></DatePicker>

      <Button type="primary2">Hello World</Button>

      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
      </div>

      <Alert
        message="Selected Date"
        description={date ? date.format("YYYY-MM-DD") : "None"}
      />

      <Button
        type="primary"
        shape="circle"
        size="small"
        icon={<DownloadOutlined></DownloadOutlined>}
      ></Button>
    </div>
  );
}

export default AntDesign;
