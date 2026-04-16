const TEMPLATE_ORDER = ['essay', 'note', 'reading-list'];

function paragraph(...lines) {
  return `${lines.join('\n')}\n`;
}

export const POST_TEMPLATES = {
  essay: {
    label: 'Essay',
    extension: 'md',
    category: 'Writing',
    body: () =>
      [
        '## Context',
        '',
        'Describe the problem, question, or tension that makes this piece necessary.',
        '',
        '## Argument',
        '',
        'Develop the main point in sections. Keep the pacing deliberate.',
        '',
        '## Closing note',
        '',
        'End with the principle, posture, or next question worth carrying forward.',
        ''
      ].join('\n')
  },
  note: {
    label: 'Note',
    extension: 'md',
    category: 'Notes',
    body: () =>
      paragraph(
        'A compact note worth returning to later.',
        '',
        '- What triggered this note?',
        '- What is the useful distinction or reminder?',
        '- What should future-you remember?'
      )
  },
  'reading-list': {
    label: 'Reading list',
    extension: 'md',
    category: 'Reading',
    legacyLayout: 'book',
    body: () =>
      [
        '## Shelf note',
        '',
        'A short framing note for this reading list: why these books, why now, and what thread connects them?',
        ''
      ].join('\n'),
    extraFrontmatter: [
      'books:',
      '  - title: ""',
      '    status: to-read',
      '    author: ""',
      '    publisher: ""',
      '    language: ""',
      '    link: ""',
      '    cover: ""',
      '    description: ""',
      '    review: ""'
    ]
  }
};

export function getTemplateNames() {
  return TEMPLATE_ORDER;
}

export function getTemplate(type) {
  return POST_TEMPLATES[type] ?? POST_TEMPLATES.essay;
}
