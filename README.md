# @teliagen/template

> Project template for new Teliagen applications.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

This package contains the default project template used by `teliagen create`.

## Usage

This template is used automatically when creating new projects:

```bash
teliagen create my-app
```

Or use a custom template:

```bash
teliagen create my-app --template your-org/your-template
```

## Template Structure

```
template/
├── src/
│   └── server/
│       ├── main.ts              # Entry point
│       ├── entities/            # Database entities
│       │   └── .gitkeep
│       ├── modules/             # Feature modules
│       │   └── example/
│       │       ├── actions/
│       │       ├── schemas/
│       │       └── services/
│       └── plugins/             # Plugin configs
│           └── .gitkeep
├── teliagen.config.ts           # Framework config
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencies
├── .env.example                 # Environment template
├── .gitignore
└── README.md
```

## Customization

The template uses placeholders that are replaced during project creation:

- `{{projectName}}` – Project name
- `{{port}}` – Server port
- `{{features}}` – Enabled features
- `{{plugins}}` – Installed plugins

## Creating Custom Templates

1. Fork this template or create a new repository
2. Maintain the same structure
3. Use placeholders for dynamic values
4. Publish to GitHub

Use your template:
```bash
teliagen create my-app --template your-username/your-template
```

## License

MIT © Teliagen Contributors

---

<p align="center">
  <strong>Part of the <a href="https://github.com/teliagen/teliagen-framework">Teliagen Framework</a></strong>
</p>
