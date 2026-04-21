# ConversationAI — Oil City Ready Mix Ltd.

## Folder Structure

```
conversation_ai/
  knowledge_base/
    kb_01_business_overview.md   ← KB 1 | Rich Text + Table + FAQ  | Who we are, contact, hours, values, corporate
    kb_02_services_products.md   ← KB 2 | Rich Text + Tables + FAQ | Services, MPa, order sizes, delivery
    kb_03_calculator.md          ← KB 3 | Rich Text + Tables + FAQ | Volume formulas, examples, conversions
  agent/
    agent_config.md              ← Bot name, KB attachments, escalation rules
    bot_goals.md                 ← Personality, Goal (script flow), Additional Info + guardrails
  README.md                      ← This file
```

> Each KB file = one Knowledge Base in GHL. Inside each KB, multiple content blocks are listed (Rich Text, Table, FAQ) — these map to the content types you add within that single knowledge base.

## Setup Order in GHL

1. Create 3 knowledge bases in ConversationAI — one per KB file above
2. Inside each KB, add the content blocks listed (Rich Text sections, Tables, FAQ pairs)
3. Create the AI Agent named **Oliver**
4. In Bot Training: attach all 3 KBs with the instructions from `agent_config.md`
5. In Bot Goals: paste Personality, Goal, and Additional Info from `bot_goals.md`
6. Test in Bot Trial before going live

## Bot Name
**Oliver** — Oil City Ready Mix AI Assistant

## Calculator Capability
Oliver can calculate concrete volume for:
- Flat slabs (length × width × thickness)
- Piles / cylinders (radius × height × count)

Both results include a 10% waste factor and are returned in m³.
