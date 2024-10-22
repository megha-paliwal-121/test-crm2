import React from "react";

import { useParams } from "react-router-dom";

import FormEditorClone from "../../../Components/Common/EditFormClone/FormEditorClone";

function ChannelPartnerClone() {
  const { id } = useParams();
  return <FormEditorClone formType="channelPartner" id={id} />;
}

export { ChannelPartnerClone };
