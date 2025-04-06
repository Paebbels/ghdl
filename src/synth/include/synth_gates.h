/* DO NOT MODIFY
   This file is automatically generated by Makefile.  */
enum Module_Id {
   Id_None = 0,
   Id_Free = 1,
   Id_Design = 2,
   Id_User_None  = 128,
   Id_User_Parameters = 129,
   Id_User_First = Id_User_Parameters + 1,
   Id_And  = 3,
   Id_Or   = 4,
   Id_Xor  = 5,
   Id_Nand = 6,
   Id_Nor  = 7,
   Id_Xnor = 8,
   Id_Add = 9,
   Id_Sub = 10,
   Id_Umin = 11,
   Id_Smin = 12,
   Id_Umax = 13,
   Id_Smax = 14,
   Id_Umul = 15,
   Id_Smul = 16,
   Id_Udiv = 17,
   Id_Sdiv = 18,
   Id_Umod = 19,
   Id_Smod = 20,
   Id_Srem = 21,
   Id_Not = 22,
   Id_Neg = 23,
   Id_Abs = 24,
   Id_Lsl = 25,
   Id_Lsr = 26,
   Id_Asr = 27,
   Id_Rol = 28,
   Id_Ror = 29,
   Id_Eq  = 30,
   Id_Ne  = 31,
   Id_Ule = 32,
   Id_Sle = 33,
   Id_Ult = 34,
   Id_Slt = 35,
   Id_Uge = 36,
   Id_Sge = 37,
   Id_Ugt = 38,
   Id_Sgt = 39,
   Id_Red_And = 40,
   Id_Red_Or  = 41,
   Id_Red_Xor = 42,
   Id_Concat2 = 43,
   Id_Concat3 = 44,
   Id_Concat4 = 45,
   Id_Concatn = 46,
   Id_Mux2 = 47,
   Id_Mux4 = 48,
   Id_Pmux = 49,
   Id_Signal  = 52,
   Id_Isignal = 53,
   Id_Output  = 54,
   Id_Ioutput = 55,
   Id_Port    = 56,
   Id_Inout   = 57,
   Id_Iinout  = 58,
   Id_Enable  = 59,
   Id_Nop = 60,
   Id_Dff   = 64,
   Id_Adff  = 65,
   Id_Idff  = 66,
   Id_Iadff = 67,
   Id_Mdff = 68,
   Id_Midff = 69,
   Id_Dlatch = 70,
   Id_Tri = 72,
   Id_Resolver = 73,
   Id_Utrunc = 82,
   Id_Strunc = 83,
   Id_Uextend = 84,
   Id_Sextend = 85,
   Id_Extract = 86,
   Id_Dyn_Extract = 87,
   Id_Dyn_Insert = 88,
   Id_Dyn_Insert_En = 89,
   Id_Memidx = 90,
   Id_Addidx = 91,

   Id_Memory = 92,
   Id_Memory_Init = 93,
   Id_Mem_Rd = 94,
   Id_Mem_Rd_Sync = 95,
   Id_Mem_Wr_Sync = 96,
   Id_Mem_Multiport = 97,
   Id_Posedge = 100,
   Id_Negedge = 101,
   Id_Assert = 104,
   Id_Assume = 105,
   Id_Cover = 106,
   Id_Assert_Cover = 107,
   Id_Allconst = 108,
   Id_Anyconst = 109,
   Id_Allseq = 110,
   Id_Anyseq = 111,
   Id_Const_X = 112,
   Id_Const_Z = 113,
   Id_Const_0 = 114,
   Id_Const_1 = 115,
   Id_Const_UB32 = 116,
   Id_Const_SB32 = 117,
   Id_Const_UL32 = 118,
   Id_Const_Bit = 119,
   Id_Const_Log = 120,
};

enum Param_Type {
      Param_Invalid,
      Param_Uns32,
      Param_Pval_Vector,
      Param_Pval_String,
      Param_Pval_Integer,
      Param_Pval_Real,
      Param_Pval_Time_Ps,
      Param_Pval_Boolean
};
