--  Simple interning for netlist elements.
--  Copyright (C) 2019 Tristan Gingold
--
--  This file is part of GHDL.
--
--  This program is free software: you can redistribute it and/or modify
--  it under the terms of the GNU General Public License as published by
--  the Free Software Foundation, either version 2 of the License, or
--  (at your option) any later version.
--
--  This program is distributed in the hope that it will be useful,
--  but WITHOUT ANY WARRANTY; without even the implied warranty of
--  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
--  GNU General Public License for more details.
--
--  You should have received a copy of the GNU General Public License
--  along with this program.  If not, see <gnu.org/licenses>.

with Dyn_Interning;

package Netlists.Internings is
   function Id_Instance (Param : Instance) return Instance;

   package Dyn_Instance_Interning is new Dyn_Interning
     (Key_Type => Instance,
      Object_Type => Instance,
      Hash => Netlists.Hash,
      Build => Id_Instance,
      Equal => "=");
end Netlists.Internings;
