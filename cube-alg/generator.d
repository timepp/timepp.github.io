import std.stdio;
import std.string;

enum Corner
    {
        UBL, UBR, UFL, UFR, DBL, DBR, DFL, DFR
    };

enum Face
    {
        U, D, L, R, F, B
    };

enum Rotate
    {
        R0, R90, R_90, R180
    };

struct Move
{
    Face f;
    Rotate r;
};

string toString(Face f)
{
    int i = cast(int)f;
    return "UDLRFB"[i..i+1];
}

string toString(Move m)
{
    if (m.r == Rotate.R0) return "";
    return toString(m.f) ~ (m.r == Rotate.R90? "" : (m.r == Rotate.R_90? "'" : "2"));
}

string toString(Move[] moves)
{
    string[] s;
    foreach(m; moves)
    {
        s ~= toString(m);
    }
    return s.join(" ");
}

Corner translate(Corner c, Move s)
{
    Corner[Corner] map_U90 =   [Corner.UBR: Corner.UFR, Corner.UBL: Corner.UBR, Corner.UFL: Corner.UBL, Corner.UFR: Corner.UFL];
    Corner[Corner] map_U_90 =  [Corner.UFR: Corner.UBR, Corner.UBR: Corner.UBL, Corner.UBL: Corner.UFL, Corner.UFL: Corner.UFR];
    Corner[Corner] map_U180 =  [Corner.UBR: Corner.UFL, Corner.UBL: Corner.UFR, Corner.UFL: Corner.UBR, Corner.UFR: Corner.UBL];
    Corner[Corner] map_R90 =   [Corner.UFR: Corner.UBR, Corner.UBR: Corner.DBR, Corner.DBR: Corner.DFR, Corner.DFR: Corner.UFR];
    Corner[Corner] map_R_90 =  [Corner.UBR: Corner.UFR, Corner.DBR: Corner.UBR, Corner.DFR: Corner.DBR, Corner.UFR: Corner.DFR];
    Corner[Corner] map_R180 =  [Corner.UFR: Corner.DBR, Corner.UBR: Corner.DFR, Corner.DBR: Corner.UFR, Corner.DFR: Corner.UBR];
    Corner[Corner] map_F90 =   [Corner.UFR: Corner.DFR, Corner.DFR: Corner.DFL, Corner.DFL: Corner.UFL, Corner.UFL: Corner.UFR];
    Corner[Corner] map_F_90 =  [Corner.DFR: Corner.UFR, Corner.DFL: Corner.DFR, Corner.UFL: Corner.DFL, Corner.UFR: Corner.UFL];
    Corner[Corner] map_F180 =  [Corner.UFR: Corner.DFL, Corner.DFR: Corner.UFL, Corner.DFL: Corner.UFR, Corner.UFL: Corner.DFR];
    Corner[Corner][Move] map = [
                                Move(Face.U, Rotate.R90): map_U90,
                                Move(Face.U, Rotate.R_90): map_U_90,
                                Move(Face.U, Rotate.R180): map_U180,
                                Move(Face.R, Rotate.R90): map_R90,
                                Move(Face.R, Rotate.R_90): map_R_90,
                                Move(Face.R, Rotate.R180): map_R180,
                                Move(Face.F, Rotate.R90): map_F90,
                                Move(Face.F, Rotate.R_90): map_F_90,
                                Move(Face.F, Rotate.R180): map_F180,
                                ];

    if (s in map && c in map[s])
    {
        return map[s][c];
    }

    return c;
}

Corner translate(Corner c, Move[] s)
{
    foreach (move; s)
    {
        c = translate(c, move);
    }
    return c;
}

void f2l12()
{
    Move[] UM = [Move(Face.U, Rotate.R90), Move(Face.U, Rotate.R_90), Move(Face.U, Rotate.R180), Move(Face.U, Rotate.R0)];
    Move[] RFM = [Move(Face.R, Rotate.R90)];
    for (int j = 0; j < 1; j++) // R
    {
            for (int t2 = 0; t2 < 3; t2++)
                for (int t3 = 0; t3 < 3; t3++)
                    for (int t4 = 0; t4 < 3; t4++)
                        for (int t5 = 0; t5 < 3; t5++)
                            for (int t6 = 0; t6 < 3; t6++)
                                for (int t1 = 0; t1 < 4; t1++)
                                {

                                    Move[] maneuver = [
                                               UM[t1],
                                               RFM[j],
                                               UM[t2],
                                               reverse(RFM[j]),
                                               UM[t3],
                                               RFM[j],
                                               UM[t4],
                                               reverse(RFM[j]),
                                               UM[t5],
                                               RFM[j],
                                               UM[t6],
                                               reverse(RFM[j]),
                                               ];

                                    if (translate(Corner.UFR, maneuver) == Corner.DFR)
                                    {
                                        writefln("<div class=\"roofpig\" data-config=\"base=F2L | alg= %s\"></div>", toString(maneuver));
                                    }
                                }
    }
}

void f2l8()
{
    Move[] UM = [Move(Face.U, Rotate.R90), Move(Face.U, Rotate.R_90), Move(Face.U, Rotate.R180), Move(Face.U, Rotate.R0)];
    Move[] RFM = [Move(Face.R, Rotate.R90), Move(Face.F, Rotate.R_90)];
    for (int j = 0; j < 2; j++) // R or F'
    {
            for (int t2 = 0; t2 < 3; t2++)
                for (int t3 = 0; t3 < 3; t3++)
                    for (int t4 = 0; t4 < 3; t4++)
                        for (int t1 = 0; t1 < 4; t1++)
                        {

                            Move[] maneuver = [
                                               UM[t1],
                                               Move(Face.R, Rotate.R90),
                                               UM[t2],
                                               Move(Face.R, Rotate.R_90),
                                               UM[t3],
                                               RFM[j],
                                               UM[t4],
                                               reverse(RFM[j])
                                               ];

                            if (translate(Corner.UFR, maneuver) == Corner.DFR)
                            {
                                writefln("<div class=\"roofpig\" data-config=\"base=F2L | alg= %s\"></div>", toString(maneuver));
                            }
                        }
    }
}

void f2l4()
{
    Move[] uMoves = [Move(Face.U, Rotate.R90), Move(Face.U, Rotate.R_90), Move(Face.U, Rotate.R180), Move(Face.U, Rotate.R0)];
    for (int t2 = 0; t2 < 3; t2++)
        for (int t1 = 0; t1 < 4; t1++)
        {
            Move[] maneuver = [uMoves[t1], Move(Face.R, Rotate.R90), uMoves[t2], Move(Face.R, Rotate.R_90)];
            Corner c = translate(Corner.UFR, maneuver);
            if (c == Corner.DFR)
            {
                writefln("<div class=\"roofpig\" data-config=\"base=F2L | alg= %s\"></div>", toString(maneuver));
            }
        }
}

Move reverse(Move m)
{
    Move nm = m;
    if (m.r == Rotate.R90) nm.r = Rotate.R_90;
    if (m.r == Rotate.R_90) nm.r = Rotate.R90;
    return nm;
}

int main(string argv[])
{
    f2l12();
    return 0;
}
