const startMessage = `
    <div class="welcome-message">Welcome to the start page</dev>
    <br><br><span class="green fw-bold">Whose business card do you want to view?</span>
`;

const iliaPage = 'https://ilia.soltanov.dev/',
      alexPage = 'https://alex.soltanov.dev/',
      defaultTextPrintTime = 12;

const assembly_HelloWorld = [
    'section .text',
    'global _start',
    '_start:',
    '    mov  al, 0x01',
    '    mov  dil, al',
    '    push 0x0a646c72',
    '    push 0x6f57206f',
    '    push 0x6c6c6548',
    '    mov  rsi, rsp',
    '    mov  dl, 0x0c',
    '    syscall',
    '    mov  al, 0x3c',
    '    xor  dil, dil',
    '    syscall',
];

const titleChangeTime = 1500;