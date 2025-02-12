import Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";
import '@blockly/field-grid-dropdown';
Blockly.Blocks["jg_messages_id_of_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "ID of message %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "String",
                "tooltip": "Get the message ID from the message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_id_of_message"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.id`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
/*
// next block
Blockly.Blocks["jg_messages_message_mentions_everyone"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 mentions everyone?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message contains the @everyone ping.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_mentions_everyone"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.mentions.everyone`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_messages_message_is_a_system_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 is a system message?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is a system message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_a_system_message"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.system`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_messages_message_is_pinned"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 is pinned?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is pinned at all.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_pinned"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.pinned`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_messages_message_is_text_to_speech"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 is text to speech?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is a text to speech message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_text_to_speech"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.tts`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
*/
// next block
Blockly.Blocks["jg_messages_message_is_value"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    },
                    {
                        "type": "field_grid_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "mentions everyone?",
                                'mentions.everyone'
                            ],
                            [
                                "mentions members?",
                                'mentions.users.size > 0'
                            ],
                            [
                                "mentions roles?",
                                'mentions.roles.size > 0'
                            ],
                            [
                                "mentions channels?",
                                'mentions.channels.size > 0'
                            ],
                            [
                                "is a system message?",
                                'system'
                            ],
                            [
                                "is pinned?",
                                'pinned'
                            ],
                            [
                                "is text to speech?",
                                'tts'
                            ],
                            [
                                "is edited?",
                                'editedTimestamp != null'
                            ],
                            [
                                "is from webhook?",
                                'webhookId != null'
                            ],
                            [
                                "is a reply?",
                                'type == "REPLY"'
                            ],
                            [
                                "has embeds?",
                                'embeds.length > 0'
                            ],
                            [
                                "has buttons or menus?",
                                'components.length > 0'
                            ],
                            [
                                "has attachments?",
                                'attachments.size > 0'
                            ],
                            [
                                "has stickers?",
                                'stickers.size > 0'
                            ]
                        ],
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is a message with this property.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_value"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const property = block.getFieldValue("TYPE")
    const code = [`${message}.${property}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_channel_get_last_messages_in_channel_then"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get last %1 messages in channel %2 then %3 %4",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "AMOUNT",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "CHANNEL",
                        "check": "Channel"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ],
                "colour": "#a55b80",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Get the last number of messages in the channel and run the blocks below.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_channel_get_last_messages_in_channel_then"] = function (block) {
    const amount = Blockly.JavaScript.valueToCode(block, "AMOUNT", Blockly.JavaScript.ORDER_ATOMIC);
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `${channel}.messages.fetch({ limit: ${amount} }).then((last_messages_in_channel) => {
    ${statements}
});
`;
    return code;
};
// next block
Blockly.Blocks["jg_channel_last_message_number"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "last message #%1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INDEX",
                        "check": "Number"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Message",
                "tooltip": "Get the last message at the index in the channel.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_channel_last_message_number"] = function (block) {
    const index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`last_messages_in_channel.at(${index} - 1)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_message_user_replied_to_in_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "user replied to in message %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Member",
                "tooltip": "Get the user that was replied to in the message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_message_user_replied_to_in_message"] = function (block) {
    const msg = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${msg}.mentions.repliedUser`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// ------------------
//
// Attachment Blocks
//
// ------------------
Blockly.Blocks["jg_attachment_amount_of_attachments_on_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "amount of attachments on message %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    }
                ],
                "colour": "#187795",
                "output": "Number",
                "tooltip": "Get the number of attachments on a message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_attachment_amount_of_attachments_on_message"] = function (block) {
    const msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${msg}.attachments.size`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_attachment_get_attachment_number"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get attachment #%1 on message %2",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INDEX",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    }
                ],
                "colour": "#187795",
                "output": "Attachment",
                "tooltip": "Get the specific attachment on the message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_attachment_get_attachment_number"] = function (block) {
    const index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_ATOMIC);
    const msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${msg}.attachments.at(${index})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_attachment_get_attachment_property"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get property %2 from attachment %1",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "ATTACH",
                        "check": "Attachment"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "PROPERTY",
                        "options": [
                            [
                                "URL",
                                'url'
                            ],
                            [
                                "name",
                                'name'
                            ],
                            [
                                "size (in bytes)",
                                'size'
                            ],
                            [
                                "MIME type",
                                'contentType'
                            ],
                            [
                                "hidden",
                                'ephemeral'
                            ],
                            [
                                "ID",
                                'id'
                            ],
                            [
                                "is spoiler?",
                                'spoiler'
                            ],
                            [
                                "width (type dependent)",
                                'attachments.size > 0'
                            ],
                            [
                                "height (type dependent)",
                                'stickers.size > 0'
                            ]
                        ],
                    }
                ],
                "colour": "#187795",
                "output": null,
                "tooltip": "Get the specific property from the attachment. You can see what MIME types apply to what file extension by Right Clicking on the block and pressing \"Help\". Width and Height only apply to certain types of attachment types.",
                "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"
            }
        );
    }
}
Blockly.JavaScript["jg_attachment_get_attachment_property"] = function (block) {
    const property = block.getFieldValue("PROPERTY")
    const attach = Blockly.JavaScript.valueToCode(block, "ATTACH", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${attach}.${property}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// ------------------
//
// back to normal shit
//
// ------------------
Blockly.Blocks["jg_message_mentioned_member_number_on_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get mentioned %3 #%1 on message %2",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INDEX",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "member",
                                'users'
                            ],
                            [
                                "role",
                                'roles'
                            ],
                            [
                                "channel",
                                'channels'
                            ]
                        ],
                    }
                ],
                "colour": "#187795",
                "output": ["Member", "Role", "Channel"],
                "tooltip": "Get a specific mentioned member, role or channel on the message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_message_mentioned_member_number_on_message"] = function (block) {
    const index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_ATOMIC);
    const msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const type = block.getFieldValue("TYPE")
    const code = [`${msg}.mentions.${type}.at(${index})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next blok
Blockly.Blocks["jg_message_amount_of_mentioned_members_on_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "amount of mentioned %2 on message %1",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "members",
                                'users'
                            ],
                            [
                                "roles",
                                'roles'
                            ],
                            [
                                "channels",
                                'channels'
                            ]
                        ],
                    }
                ],
                "colour": "#187795",
                "output": "Number",
                "tooltip": "Get the amount of members, roles, or channels mentioned in a message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_message_amount_of_mentioned_members_on_message"] = function (block) {
    const msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const type = block.getFieldValue("TYPE")
    const code = [`${msg}.mentions.${type}.size`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// -----------------------------------------------------------------------------------
//
//
// T Y P I N G
// B L O C K S
//
//
// -----------------------------------------------------------------------------------
Blockly.Blocks["jg_typing_typing_attribute"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "typing %1",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "ATT",
                        "options": [
                            [
                                "server member",
                                'member'
                            ],
                            [
                                "user",
                                'user'
                            ],
                            [
                                "channel",
                                'channel'
                            ],
                            [
                                "server",
                                'guild'
                            ],
                            [
                                "started time (UNIX)",
                                'startedAt'
                            ],
                            [
                                "is in a server?",
                                '123'
                            ]
                        ],
                    }
                ],
                "colour": "#1392ed",
                "output": ["Member", "Channel", "Server", "Guild", "Number"],
                "tooltip": "Grab information about someone typing.",
                "helpUrl": ""
            }
        );
    },
    onchange: function () {
        if (String(this.getFieldValue("ATT")) == "123") {
            this.setOutput(true, "Boolean")
        } else {
            this.setOutput(true, ["Member", "Channel", "Server", "Guild", "Number"])
        }
    }
}
Blockly.JavaScript["jg_typing_typing_attribute"] = function (block) {
    const type = block.getFieldValue("ATT")
    var code
    if (type == 123) {
        code = [`s4dTyping.inGuild()`, Blockly.JavaScript.ORDER_NONE];
    } else {
        code = [`s4dTyping.${type}`, Blockly.JavaScript.ORDER_NONE];
    }
    return code;
};
// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

Blockly.Blocks["jg_status_does_member_have_a_status_for_device"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "does member %1 have a status for discord %2?",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": "Member"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "desktop app",
                                'desktop'
                            ],
                            [
                                "website",
                                'web'
                            ],
                            [
                                "mobile app",
                                'mobile'
                            ]
                        ],
                    }
                ],
                "colour": "#187795",
                "output": "Boolean",
                "tooltip": "Can be used to see what devices the member is using. If the member is not using the device, it'll be false.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_status_does_member_have_a_status_for_device"] = function (block) {
    var member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    if (member.endsWith(".user")) {
        member = member.substring(0, member.length - 5)
    }
    if (member.endsWith(".user)")) {
        member = member.substring(0, member.length - 6) + ")"
    }
    const type = block.getFieldValue("TYPE")
    const code = [`${member}.presence.clientStatus.${type} != null`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_status_member_status_on_discord"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "member %1 status on discord %2",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": "Member"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "desktop app",
                                'desktop'
                            ],
                            [
                                "website",
                                'web'
                            ],
                            [
                                "mobile app",
                                'mobile'
                            ]
                        ],
                    }
                ],
                "colour": "#187795",
                "output": "String",
                "tooltip": "Can be used to see what devices the member is using. This can be online, idle, or dnd.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_status_member_status_on_discord"] = function (block) {
    var member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    if (member.endsWith(".user")) {
        member = member.substring(0, member.length - 5)
    }
    if (member.endsWith(".user)")) {
        member = member.substring(0, member.length - 6) + ")"
    }
    const type = block.getFieldValue("TYPE")
    const code = [`${member}.presence.clientStatus.${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_messages_reply_with_allowed_list_of_pings_on_users_on_roles"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "reply %1 with allowed list of pings %2 on user IDs %3 on role IDs %4",
                "inputsInline": false,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CONTENT",
                        "check": ["Number", "String", "MessageEmbed", "embed", "var"]
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_value",
                        "name": "USERS",
                        "check": ["Array", "List"]
                    },
                    {
                        "type": "input_value",
                        "name": "ROLES",
                        "check": ["Array", "List"]
                    }
                ],
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Send a message but only ping the members and roles with the IDs in the list. If you dont want to ping anyone or any roles, just put an empty list. If you want to ping all members or all roles, just leave the input empty with no block there.",
                "helpUrl": ""
            }
        );
    }
};
Blockly.JavaScript["jg_messages_reply_with_allowed_list_of_pings_on_users_on_roles"] = function (block) {
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const users = Blockly.JavaScript.valueToCode(block, "USERS", Blockly.JavaScript.ORDER_ATOMIC);
    const roles = Blockly.JavaScript.valueToCode(block, "ROLES", Blockly.JavaScript.ORDER_ATOMIC);
    var usableA = ""
    var usableB = ""
    if (!((users === null) || (users === ""))) {
        usableA = `users: ${users},`
    }
    if (!((roles === null) || (roles === ""))) {
        usableB = `roles: ${roles},`
    }
    if (block.getInput("CONTENT").connection.targetConnection) {
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
            block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
            null;
        if ((contentType === null)) {
            const code = `s4dmessage.channel.send({
                content: String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else if ((contentType === "embed") || (!contentType && typeof contentType === "object")) {
            const code = `s4dmessage.channel.send({
                 embeds:[${content}],
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
                });
                `;
            return code;
        } else if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `s4dmessage.channel.send({
                ${content},
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else {
            const code = `s4dmessage.channel.send({
                content: String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        }
    } else {
        const code = `s4dmessage.channel.send({
            content:String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
        });
        `;
        return code;
    }
};
registerRestrictions("jg_messages_reply_with_allowed_list_of_pings_on_users_on_roles", [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT",
        types: [
            "CONTENT"
        ]
    },
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message"
        ]
    }
]);
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
Blockly.Blocks["jg_channels_send_in_channel_with_allowed_list_of_pings_on_users_on_roles"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "send %1 in channel %2 with allowed list of pings %3 on user IDs %4 on role IDs %5",
                "inputsInline": false,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CONTENT",
                        "check": ["MessageEmbed", "String", "Number", "embed", "var"]
                    },
                    {
                        "type": "input_value",
                        "name": "CHANNEL",
                        "check": "Channel"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_value",
                        "name": "USERS",
                        "check": ["Array", "List"]
                    },
                    {
                        "type": "input_value",
                        "name": "ROLES",
                        "check": ["Array", "List"]
                    }
                ],
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Send a message in a specific channel but only ping the members and roles with the IDs in the list. If you dont want to ping anyone or any roles, just put an empty list. If you want to ping all members or all roles, just leave the input empty with no block there.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_channels_send_in_channel_with_allowed_list_of_pings_on_users_on_roles"] = function (block) {
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const users = Blockly.JavaScript.valueToCode(block, "USERS", Blockly.JavaScript.ORDER_ATOMIC);
    const roles = Blockly.JavaScript.valueToCode(block, "ROLES", Blockly.JavaScript.ORDER_ATOMIC);
    var usableA = ""
    var usableB = ""
    if (!((users === null) || (users === ""))) {
        usableA = `users: ${users},`
    }
    if (!((roles === null) || (roles === ""))) {
        usableB = `roles: ${roles},`
    }
    if (block.getInput("CONTENT").connection.targetConnection) {
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
            block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
            null;
        if ((contentType === "var")) {
            const code = `${channel}.send({
                content: String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else if ((contentType === "embed") || (!contentType && typeof contentType === "object")) {
            const code = `${channel}.send({
                embeds:[${content}],
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `${channel}.send({
                ${content},
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else {
            const code = `${channel}.send({
                content:String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
        });
            `;
            return code;
        }
    } else {
        const code = `${channel}.send({
            content: String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
        });
        `;
        return code;
    }
};

registerRestrictions("jg_channels_send_in_channel_with_allowed_list_of_pings_on_users_on_roles", [
    {
        type: "notempty",
        message: "RES_SEND_CHANNEL_CONTENT",
        types: [
            "CONTENT"
        ]
    },
    {
        type: "notempty",
        message: "RES_SEND_CHANNEL_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc

Blockly.Blocks["jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "When a message is recieved & author isn't a bot %1 %2",
                "colour": "#F5AB1A",
                "args0": [
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot"] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        ${statements}
    });
    `;
    return code;
};













Blockly.Blocks["jg_unused_floating_comment"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "ㅤ%1ㅤ",
                "colour": "#DDAA00",
                "args0": [
                    {
                        "type": "field_multilinetext",
                        "name": "TEXT",
                        "spellcheck": false
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_unused_floating_comment"] = function (block) {
    var text = block.getFieldValue('TEXT');
    text = text.replaceAll("*/", "* /")
    const code = `/*
    ${text}
    */`;
    return code;
};
Blockly.Blocks["jg_comments_floating_arrow"] = {
    init: function () {
        let imgsize = 64
        this.jsonInit(
            {
                "message0": "%1",
                "colour": "#DDAA00",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "arrow",
                        "options": [
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831064846396/down.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down"
                                },
                                "down"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832717393940/up.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up"
                                },
                                "up"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832088231966/right.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "right"
                                },
                                "right"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831589117952/left.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "left"
                                },
                                "left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067830775427082/dleft.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down left"
                                },
                                "down left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831358427166/dright.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down right"
                                },
                                "down right"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832373469254/uleft.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up left"
                                },
                                "up left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832948072458/uright.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up right"
                                },
                                "up right"
                            ]
                        ]
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_comments_floating_arrow"] = function () {
    const code = ``;
    return code;
};
// #DDAA00
Blockly.Blocks["jg_comments_floating_image"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Image URL:")
            .appendField(new Blockly.FieldTextInput("https://media.discordapp.net/attachments/977302952530305045/984125455881863208/load.png"), "TEXT")
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://media.discordapp.net/attachments/977302952530305045/984125455881863208/load.png", 512, 512, { alt: "Custom Image", flipRtl: "FALSE" }), "IMG");
        this.setInputsInline(false);
        this.setColour("#DDAA00");
        this.setTooltip("");
        this.setHelpUrl("");
    }

    ,
    onchange: function () {
        let url = String(this.getFieldValue("TEXT"))
        this.getField("IMG").setValue(url)
        this.setTooltip("An image comment using url " + url + ".")
    }

}
Blockly.JavaScript["jg_comments_floating_image"] = function () {
    const code = ``;
    return code;
};
Blockly.Blocks["jg_comments_connected_comment"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "ㅤ%1ㅤ",
                "colour": "#DDAA00",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "field_multilinetext",
                        "name": "TEXT",
                        "spellcheck": false
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_comments_connected_comment"] = function (block) {
    var text = block.getFieldValue('TEXT');
    text = text.replaceAll("*/", "* /")
    const code = `
    /*
    ${text}
    */
   `;
    return code;
};
Blockly.Blocks["jg_comments_connected_arrow"] = {
    init: function () {
        let imgsize = 64
        this.jsonInit(
            {
                "message0": "%1",
                "colour": "#DDAA00",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "arrow",
                        "options": [
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831064846396/down.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down"
                                },
                                "down"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832717393940/up.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up"
                                },
                                "up"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832088231966/right.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "right"
                                },
                                "right"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831589117952/left.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "left"
                                },
                                "left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067830775427082/dleft.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down left"
                                },
                                "down left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831358427166/dright.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down right"
                                },
                                "down right"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832373469254/uleft.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up left"
                                },
                                "up left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832948072458/uright.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up right"
                                },
                                "up right"
                            ]
                        ]
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_comments_connected_arrow"] = function (block) {
    let arrow = block.getFieldValue("arrow")
    const code = `/*
    ${arrow}
    */`;
    return code;
};
Blockly.Blocks["jg_comments_connected_image"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Image URL:")
            .appendField(new Blockly.FieldTextInput("https://media.discordapp.net/attachments/977302952530305045/984125455881863208/load.png"), "TEXT")
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://media.discordapp.net/attachments/977302952530305045/984125455881863208/load.png", 256, 256, { alt: "Custom Image", flipRtl: "FALSE" }), "IMG");
        this.setInputsInline(false);
        this.setColour("#DDAA00");
        this.setTooltip("");
        this.setHelpUrl("");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }

    ,
    onchange: function () {
        let url = String(this.getFieldValue("TEXT"))
        this.getField("IMG").setValue(url)
        this.setTooltip("An image comment using url " + url + ".")
    }

}
Blockly.JavaScript["jg_comments_connected_image"] = function (block) {
    let url = block.getFieldValue("TEXT")
    const code = `
    /*
    Image URL:
    ${url.replaceAll("*/", "* /")}
    */
    `;
    return code;
};

// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc

Blockly.Blocks["jg_events_all_label"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 %2 %3 %4 %5 %6",
                "args0": [
                    {
                        "type": "field_multilinetext",
                        "name": "LABEL",
                        "text": "Label this event..."
                    },
                    {
                        "type": "field_colour",
                        "name": "COLOR",
                        "colour": "#ffcc00"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "EVENT",
                        "options": [
                            [
                                "When the code runs",
                                "^empty"
                            ],
                            [
                                "When the bot is connected",
                                "s4d.client.on('ready', async () => {"
                            ],
                            [
                                "When a message is received",
                                "s4d.client.on('messageCreate', async (s4dmessage) => {"
                            ],
                            [
                                "When a message is received & author isn't bot",
                                `s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }`
                            ],
                            [
                                "When a message is edited",
                                "s4d.client.on('messageUpdate', async (oldMessage, newMessage) => {"
                            ],
                            [
                                "When a message is deleted",
                                "s4d.client.on('messageDelete', async (s4dmessage) => {"
                            ],
                        ]
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ],
                "inputsInline": false,
                "colour": "#000000",
                "tooltip": "Run the blocks inside when the specified event happens.",
                "helpUrl": ""
            }
        );
    },
    onchange: function () {
        let color = this.getFieldValue("COLOR")
        this.setColour(color, "#000000")
    }
}
Blockly.JavaScript["jg_events_all_label"] = function (block) {
    const label = block.getFieldValue("LABEL")
    let event = block.getFieldValue("EVENT")
    let ending = "});"
    if (String(event) === '^empty') {
        event = ""
        ending = ""
    }
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `/*
        ${label.replaceAll("*/", "* /")}
*/
   ${event}
   ${statements}
   ${ending}
   `
    return code;
};

// aaaaaaaaaaaaaaa
//a aaa
// 

//

//

//
//
//
//
//
//

Blockly.Blocks["jg_members_list_of_known_member_ids"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "list of known member IDs",
                "inputsInline": true,
                "args0": [],
                "colour": "#187795",
                "output": ["Array", "List"],
                "tooltip": "Get a list of member IDs that the bot has known about.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_list_of_known_member_ids"] = function () {
    const code = [`JSON.parse(JSON.stringify(s4d.client)).users`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

Blockly.Blocks["jg_members_get_member_by_id"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get user by ID %1",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "ID",
                        "check": ["String", "var", "Var", "Env", "env", "Number"]
                    }
                ],
                "colour": "#187795",
                "output": "Member",
                "tooltip": "Get a user by their ID. This probably wont let you do server actions with the user however, like giving them a role.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_get_member_by_id"] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`s4d.client.users.cache.get(String(${id}))`, Blockly.JavaScript.ORDER_NONE];
    return code;
};