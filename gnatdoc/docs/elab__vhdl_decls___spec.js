GNATdoc.Documentation = {
  "label": "Elab.Vhdl_Decls",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "Create_Signal",
          "qualifier": "",
          "line": 50,
          "column": 14,
          "src": "srcs/elab-vhdl_decls.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 50,
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
                      "text": "Create_Signal",
                      "href": "docs/elab__vhdl_decls___spec.html#L50C14"
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
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_decls___spec.html#L50C29"
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
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 51,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_decls___spec.html#L51C29"
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
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 52,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Typ",
                      "href": "docs/elab__vhdl_decls___spec.html#L52C29"
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
                      "text": "Type_Acc",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L119C9"
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
                  "text": "Create a signal.\n"
                },
                {
                  "kind": "span",
                  "text": "It's a wrapper around elab.vhdl_context.create_signal but it computes\n"
                },
                {
                  "kind": "span",
                  "text": "the default value.\n"
                },
                {
                  "kind": "span",
                  "text": "Also used to create signals for ports.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 50,
              "column": 29,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 51,
              "column": 29,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7306C12"
              },
              "description": [
              ]
            },
            {
              "label": "Typ",
              "line": 52,
              "column": 29,
              "type": {
                "label": "Elab.Vhdl_Objtypes.Type_Acc",
                "docHref": "docs/elab__vhdl_objtypes___spec.html#L119C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Elab_Declaration",
          "qualifier": "",
          "line": 30,
          "column": 14,
          "src": "srcs/elab-vhdl_decls.ads.html",
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
                      "text": "Elab_Declaration",
                      "href": "docs/elab__vhdl_decls___spec.html#L30C14"
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
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_decls___spec.html#L30C32"
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
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 31,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_decls___spec.html#L31C32"
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
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 32,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Force_Init",
                      "href": "docs/elab__vhdl_decls___spec.html#L32C32"
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
                      "text": "Boolean"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 33,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Last_Type",
                      "href": "docs/elab__vhdl_decls___spec.html#L33C32"
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
                      "cssClass": "keyword",
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
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
              "label": "Syn_Inst",
              "line": 30,
              "column": 32,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 31,
              "column": 32,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7306C12"
              },
              "description": [
              ]
            },
            {
              "label": "Force_Init",
              "line": 32,
              "column": 32,
              "type": {
                "label": "Boolean"
              },
              "description": [
              ]
            },
            {
              "label": "Last_Type",
              "line": 33,
              "column": 32,
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
          "label": "Elab_Declarations",
          "qualifier": "",
          "line": 35,
          "column": 14,
          "src": "srcs/elab-vhdl_decls.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 35,
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
                      "text": "Elab_Declarations",
                      "href": "docs/elab__vhdl_decls___spec.html#L35C14"
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
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_decls___spec.html#L35C33"
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
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 36,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decls",
                      "href": "docs/elab__vhdl_decls___spec.html#L36C33"
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
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 37,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Force_Init",
                      "href": "docs/elab__vhdl_decls___spec.html#L37C33"
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
                      "text": "Boolean"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "False"
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
              "label": "Syn_Inst",
              "line": 35,
              "column": 33,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decls",
              "line": 36,
              "column": 33,
              "type": {
                "label": "Vhdl.Nodes.Iir",
                "docHref": "docs/vhdl__nodes___spec.html#L7305C12"
              },
              "description": [
              ]
            },
            {
              "label": "Force_Init",
              "line": 37,
              "column": 33,
              "type": {
                "label": "Boolean"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Elab_File_Declaration",
          "qualifier": "",
          "line": 27,
          "column": 14,
          "src": "srcs/elab-vhdl_decls.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 27,
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
                      "text": "Elab_File_Declaration",
                      "href": "docs/elab__vhdl_decls___spec.html#L27C14"
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
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_decls___spec.html#L27C37"
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
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 28,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_decls___spec.html#L28C37"
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
              "label": "Syn_Inst",
              "line": 27,
              "column": 37,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 28,
              "column": 37,
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
          "label": "Elab_Subprogram_Declaration",
          "qualifier": "",
          "line": 25,
          "column": 14,
          "src": "srcs/elab-vhdl_decls.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 25,
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
                      "text": "Elab_Subprogram_Declaration",
                      "href": "docs/elab__vhdl_decls___spec.html#L25C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 26,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_decls___spec.html#L26C7"
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
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
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
                      "text": "Subprg",
                      "href": "docs/elab__vhdl_decls___spec.html#L26C38"
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
              "label": "Syn_Inst",
              "line": 26,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Subprg",
              "line": 26,
              "column": 38,
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
          "label": "Finalize_Declaration",
          "qualifier": "",
          "line": 39,
          "column": 14,
          "src": "srcs/elab-vhdl_decls.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 39,
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
                      "text": "Finalize_Declaration",
                      "href": "docs/elab__vhdl_decls___spec.html#L39C14"
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
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_decls___spec.html#L39C36"
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
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 40,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_decls___spec.html#L40C36"
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
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 41,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Is_Subprg",
                      "href": "docs/elab__vhdl_decls___spec.html#L41C36"
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
                      "text": "Boolean"
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
              "label": "Syn_Inst",
              "line": 39,
              "column": 36,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 40,
              "column": 36,
              "type": {
                "label": "Vhdl.Nodes.Iir",
                "docHref": "docs/vhdl__nodes___spec.html#L7305C12"
              },
              "description": [
              ]
            },
            {
              "label": "Is_Subprg",
              "line": 41,
              "column": 36,
              "type": {
                "label": "Boolean"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Finalize_Declarations",
          "qualifier": "",
          "line": 42,
          "column": 14,
          "src": "srcs/elab-vhdl_decls.ads.html",
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
                      "text": "Finalize_Declarations",
                      "href": "docs/elab__vhdl_decls___spec.html#L42C14"
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
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_decls___spec.html#L42C37"
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
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 43,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decls",
                      "href": "docs/elab__vhdl_decls___spec.html#L43C37"
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
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 44,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Is_Subprg",
                      "href": "docs/elab__vhdl_decls___spec.html#L44C37"
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
                      "text": "Boolean"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "False"
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
              "label": "Syn_Inst",
              "line": 42,
              "column": 37,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decls",
              "line": 43,
              "column": 37,
              "type": {
                "label": "Vhdl.Nodes.Iir",
                "docHref": "docs/vhdl__nodes___spec.html#L7305C12"
              },
              "description": [
              ]
            },
            {
              "label": "Is_Subprg",
              "line": 44,
              "column": 37,
              "type": {
                "label": "Boolean"
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