GNATdoc.SourceFile = {
  "kind": "code",
  "children": [
    {
      "kind": "line",
      "number": 1,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Instantiation synthesis."
        }
      ]
    },
    {
      "kind": "line",
      "number": 2,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Copyright (C) 2019 Tristan Gingold"
        }
      ]
    },
    {
      "kind": "line",
      "number": 3,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--"
        }
      ]
    },
    {
      "kind": "line",
      "number": 4,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  This file is part of GHDL."
        }
      ]
    },
    {
      "kind": "line",
      "number": 5,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--"
        }
      ]
    },
    {
      "kind": "line",
      "number": 6,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  This program is free software: you can redistribute it and/or modify"
        }
      ]
    },
    {
      "kind": "line",
      "number": 7,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  it under the terms of the GNU General Public License as published by"
        }
      ]
    },
    {
      "kind": "line",
      "number": 8,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  the Free Software Foundation, either version 2 of the License, or"
        }
      ]
    },
    {
      "kind": "line",
      "number": 9,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  (at your option) any later version."
        }
      ]
    },
    {
      "kind": "line",
      "number": 10,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--"
        }
      ]
    },
    {
      "kind": "line",
      "number": 11,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  This program is distributed in the hope that it will be useful,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 12,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  but WITHOUT ANY WARRANTY; without even the implied warranty of"
        }
      ]
    },
    {
      "kind": "line",
      "number": 13,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 14,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GNU General Public License for more details."
        }
      ]
    },
    {
      "kind": "line",
      "number": 15,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--"
        }
      ]
    },
    {
      "kind": "line",
      "number": 16,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  You should have received a copy of the GNU General Public License"
        }
      ]
    },
    {
      "kind": "line",
      "number": 17,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  along with this program.  If not, see <gnu.org/licenses>."
        }
      ]
    },
    {
      "kind": "line",
      "number": 18,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 19,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "with"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Types"
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
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Types"
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
      "number": 20,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "with"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Netlists"
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
      "number": 21,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 22,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "with"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Elab.Vhdl_Context"
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
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Elab.Vhdl_Context"
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
      "number": 23,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 24,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "with"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Vhdl.Nodes"
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
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Vhdl.Nodes"
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
      "number": 25,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 26,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "with"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Synth.Context"
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
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Synth.Context"
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
      "number": 27,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "with"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Synth.Flags"
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
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Synth.Flags"
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
      ]
    },
    {
      "kind": "line",
      "number": 29,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "package"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Synth.Vhdl_Insts",
          "href": "docs/synth__vhdl_insts___spec.html#L29C15"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "is"
        }
      ]
    },
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
          "cssClass": "comment",
          "text": "--  Create the declaration of the top entity."
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
          "text": "Synth_Top_Entity",
          "href": "docs/synth__vhdl_insts___spec.html#L31C14"
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
          "text": "Base",
          "href": "docs/synth__vhdl_insts___spec.html#L31C32"
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
          "text": "Base_Instance_Acc",
          "href": "docs/synth__context___spec.html#L30C9"
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
          "text": "Design_Unit",
          "href": "docs/synth__vhdl_insts___spec.html#L32C32"
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
          "text": "Encoding",
          "href": "docs/synth__vhdl_insts___spec.html#L33C32"
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
          "text": "Name_Encoding",
          "href": "docs/synth__flags___spec.html#L25C9"
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
      "number": 34,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "                               "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Syn_Inst",
          "href": "docs/synth__vhdl_insts___spec.html#L34C32"
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
          "text": ")"
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
      "number": 35,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 36,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Synthesize the top entity and all the sub-modules."
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
          "text": "Synth_All_Instances",
          "href": "docs/synth__vhdl_insts___spec.html#L37C14"
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
      "number": 38,
      "children": [
      ]
    },
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
          "text": "Synth_Design_Instantiation_Statement",
          "href": "docs/synth__vhdl_insts___spec.html#L39C14"
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
          "href": "docs/synth__vhdl_insts___spec.html#L40C7"
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
          "text": "Stmt",
          "href": "docs/synth__vhdl_insts___spec.html#L40C38"
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
    },
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
          "text": "Synth_Blackbox_Instantiation_Statement",
          "href": "docs/synth__vhdl_insts___spec.html#L41C14"
        }
      ]
    },
    {
      "kind": "line",
      "number": 42,
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
          "href": "docs/synth__vhdl_insts___spec.html#L42C7"
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
          "text": "Stmt",
          "href": "docs/synth__vhdl_insts___spec.html#L42C38"
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
    },
    {
      "kind": "line",
      "number": 43,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 44,
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
          "text": "Synth_Component_Instantiation_Statement",
          "href": "docs/synth__vhdl_insts___spec.html#L44C14"
        }
      ]
    },
    {
      "kind": "line",
      "number": 45,
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
          "href": "docs/synth__vhdl_insts___spec.html#L45C7"
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
          "text": "Stmt",
          "href": "docs/synth__vhdl_insts___spec.html#L45C38"
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
    },
    {
      "kind": "line",
      "number": 46,
      "children": [
      ]
    },
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
          "text": "type"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Synth_Foreign_Module_Acc",
          "href": "docs/synth__vhdl_insts___spec.html#L47C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "is"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "access"
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
          "text": "     "
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
          "text": "("
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Base",
          "href": "docs/synth__vhdl_insts___spec.html#L48C16"
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
          "text": "Base_Instance_Acc",
          "href": "docs/synth__context___spec.html#L30C9"
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
      "number": 49,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "               "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "M",
          "href": "docs/synth__vhdl_insts___spec.html#L49C16"
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
          "text": "Int32",
          "href": "docs/types___spec.html#L27C9"
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
      "number": 50,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "               "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Vhdl_Inst",
          "href": "docs/synth__vhdl_insts___spec.html#L50C16"
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
          "text": "               "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Vhdl_Decl",
          "href": "docs/synth__vhdl_insts___spec.html#L51C16"
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
          "cssClass": "text",
          "text": " "
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
          "text": "Netlists.Module",
          "href": "docs/netlists___spec.html#L383C9"
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
      ]
    },
    {
      "kind": "line",
      "number": 53,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Synth_Foreign_Module",
          "href": "docs/synth__vhdl_insts___spec.html#L53C4"
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
          "text": "Synth_Foreign_Module_Acc",
          "href": "docs/synth__vhdl_insts___spec.html#L47C9"
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
      "number": 54,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Synth.Vhdl_Insts"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ";"
        }
      ]
    }
  ],
  "label": "synth-vhdl_insts.ads"
};