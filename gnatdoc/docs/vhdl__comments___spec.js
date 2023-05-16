GNATdoc.Documentation = {
  "label": "Vhdl.Comments",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "Find_First_Comment",
          "qualifier": "",
          "line": 47,
          "column": 13,
          "src": "srcs/vhdl-comments.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 47,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Find_First_Comment",
                      "href": "docs/vhdl__comments___spec.html#L47C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "File",
                      "href": "docs/vhdl__comments___spec.html#L47C33"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Source_File_Entry",
                      "href": "docs/types___spec.html#L97C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "N",
                      "href": "docs/vhdl__comments___spec.html#L47C59"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7306C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 48,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Comment_Index",
                      "href": "docs/file_comments___spec.html#L107C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Return the first comment attached to node N.  FILE must be the file\n"
                },
                {
                  "kind": "span",
                  "text": "of N.\n"
                },
                {
                  "kind": "span",
                  "text": "Use File_Comments to iterate on comments.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "File",
              "line": 47,
              "column": 33,
              "type": {
                "label": "Types.Source_File_Entry",
                "docHref": "docs/types___spec.html#L97C9"
              },
              "description": [
              ]
            },
            {
              "label": "N",
              "line": 47,
              "column": 59,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7306C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Gather_Comments_Block",
          "qualifier": "",
          "line": 30,
          "column": 14,
          "src": "srcs/vhdl-comments.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 30,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Gather_Comments_Block",
                      "href": "docs/vhdl__comments___spec.html#L30C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rng",
                      "href": "docs/vhdl__comments___spec.html#L30C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Comments_Range",
                      "href": "docs/file_comments___spec.html#L136C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "N",
                      "href": "docs/vhdl__comments___spec.html#L30C59"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Iir",
                      "href": "docs/vhdl__nodes___spec.html#L7305C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Save comments and attached them to a node.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Rng",
              "line": 30,
              "column": 37,
              "type": {
                "label": "File_Comments.Comments_Range",
                "docHref": "docs/file_comments___spec.html#L81C9"
              },
              "description": [
              ]
            },
            {
              "label": "N",
              "line": 30,
              "column": 59,
              "type": {
                "label": "Vhdl.Nodes.Iir",
                "docHref": "docs/vhdl__nodes___spec.html#L7305C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Gather_Comments_Block",
          "qualifier": "",
          "line": 41,
          "column": 14,
          "src": "srcs/vhdl-comments.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 41,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Gather_Comments_Block",
                      "href": "docs/vhdl__comments___spec.html#L41C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "N",
                      "href": "docs/vhdl__comments___spec.html#L41C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Iir",
                      "href": "docs/vhdl__nodes___spec.html#L7305C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "General rule:\n"
                },
                {
                  "kind": "span",
                  "text": "Previous unattached comments are attached to node N.\n"
                },
                {
                  "kind": "span",
                  "text": "Previous attached comments from the last empty line are attached to N.\n"
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "For Gather_Comments_Block: the following comments until an empty line\n"
                },
                {
                  "kind": "span",
                  "text": "will be attached to node N too.\n"
                },
                {
                  "kind": "span",
                  "text": "For Gather_Comments_Line: if there is a comment on the same line, it\n"
                },
                {
                  "kind": "span",
                  "text": "is attached to node N and so are the following comments until an\n"
                },
                {
                  "kind": "span",
                  "text": "empty line.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "N",
              "line": 41,
              "column": 37,
              "type": {
                "label": "Vhdl.Nodes.Iir",
                "docHref": "docs/vhdl__nodes___spec.html#L7305C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Gather_Comments_Line",
          "qualifier": "",
          "line": 42,
          "column": 14,
          "src": "srcs/vhdl-comments.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 42,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Gather_Comments_Line",
                      "href": "docs/vhdl__comments___spec.html#L42C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "N",
                      "href": "docs/vhdl__comments___spec.html#L42C36"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Iir",
                      "href": "docs/vhdl__nodes___spec.html#L7305C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "N",
              "line": 42,
              "column": 36,
              "type": {
                "label": "Vhdl.Nodes.Iir",
                "docHref": "docs/vhdl__nodes___spec.html#L7305C12"
              },
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Subprograms"
    }
  ]
};