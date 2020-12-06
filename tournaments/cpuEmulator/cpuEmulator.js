function cpuEmulator(subroutine) {
    var registers    = new Uint32Array(43),
        ip           = 0,
        reg          = a => parseInt(a.slice(1)),
        instructions = {
            MOV: (a, b) => registers[reg(b)] = a[0] === "R" ? registers[reg(a)] : +a,
            ADD: (a, b) => registers[reg(a)] += registers[reg(b)],
            DEC: a => registers[reg(a)]--,
            INC: a => registers[reg(a)]++,
            INV: a => registers[reg(a)] ^= 0xffffffff,
            JMP: a => ip = a - 1,
            JZ:  a => registers[0] ? 0 : ip = a - 1,
            NOP: a => 0
        },
        curr, ins, a, b;
    while (curr = subroutine[ip++]) {
        [ins, a, b] = curr.split(/[ ,]/);
        instructions[ins](a,b);
    }
    return "" + registers[42];
}
