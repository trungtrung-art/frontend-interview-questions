# Câu Hỏi Behavioral & Kinh Nghiệm
## Soft Skills & Leadership - Senior/Lead Level

---

## 📚 MỤC LỤC
- [Phần 1: Câu Hỏi Về Kinh Nghiệm Kỹ Thuật](#phần-1-câu-hỏi-về-kinh-nghiệm-kỹ-thuật)
- [Phần 2: Câu Hỏi Behavioral (STAR Method)](#phần-2-câu-hỏi-behavioral-star-method)
- [Phần 3: Leadership & Teamwork](#phần-3-leadership--teamwork)
- [Phần 4: Situational Questions](#phần-4-situational-questions)
- [Hướng Dẫn Trả Lời](#hướng-dẫn-trả-lời)

---

# PHẦN 1: CÂU HỎI VỀ KINH NGHIỆM KỸ THUẬT

## Câu 1: Project Phức Tạp Nhất
**Mô tả project phức tạp nhất bạn từng làm. Challenges và cách bạn giải quyết?**

### Cách tiếp cận trả lời:
```
STAR Method:
- Situation: Context của project
- Task: Vai trò và responsibilities của bạn
- Action: Cụ thể bạn đã làm gì
- Result: Kết quả đạt được (quantifiable nếu có thể)
```

### Ví dụ câu trả lời mẫu:
> **Situation:** Tại công ty X, chúng tôi cần migrate một e-commerce platform từ monolithic jQuery sang React. Hệ thống có 200+ pages và 50,000+ active users daily.
>
> **Task:** Tôi là Tech Lead, chịu trách nhiệm architecture decisions và lead team 5 developers.
>
> **Action:**
> - Implement Strangler Fig pattern để migrate incrementally
> - Setup micro-frontend architecture với Module Federation
> - Establish coding standards và review process
> - Create shared component library
> - Setup monitoring và feature flags cho gradual rollout
>
> **Result:**
> - Migration completed trong 8 tháng (planned 12 tháng)
> - Page load time giảm 60%
> - Zero downtime during migration
> - Team productivity tăng 40% sau migration

---

## Câu 2: Performance Optimization
**Kể về một lần bạn phải optimize performance của application. Approach của bạn?**

### Framework trả lời:
1. **Identify:** Làm sao bạn phát hiện performance issue?
2. **Measure:** Tools và metrics bạn sử dụng?
3. **Analyze:** Root cause là gì?
4. **Optimize:** Cụ thể bạn làm gì?
5. **Verify:** Kết quả cải thiện như thế nào?

### Ví dụ:
> **Issue:** Dashboard page load time > 8 seconds, users complaining
>
> **Approach:**
> 1. **Measure first:** Sử dụng Lighthouse, Chrome DevTools Performance tab
> 2. **Identify bottlenecks:**
>    - Bundle size 2.5MB
>    - 15+ API calls on initial load
>    - Large images không optimized
>    - Re-renders không cần thiết
>
> 3. **Actions:**
>    - Code splitting: Main bundle giảm từ 2.5MB → 400KB
>    - Implement React.lazy cho routes
>    - Consolidate API calls, implement caching với React Query
>    - Image optimization: WebP, lazy loading
>    - Virtualization cho long lists
>
> 4. **Results:**
>    - Load time: 8s → 1.8s
>    - Lighthouse score: 45 → 92
>    - User satisfaction tăng 35%

---

## Câu 3: Technical Debt
**Bạn handle technical debt như thế nào trong projects trước?**

### Key points cần đề cập:
- Cách identify và prioritize tech debt
- Balance giữa features và refactoring
- Communication với stakeholders
- Strategies để prevent future debt

### Ví dụ:
> Tại project trước, tôi implement "Tech Debt Friday" - mỗi sprint dành 20% thời gian cho refactoring.
>
> **Prioritization framework:**
> 1. **High impact, low effort:** Fix ngay
> 2. **High impact, high effort:** Plan vào roadmap
> 3. **Low impact, low effort:** Junior tasks
> 4. **Low impact, high effort:** Document và monitor
>
> **Results:**
> - Bug rate giảm 40% sau 3 tháng
> - Developer satisfaction tăng
> - Onboarding time cho new members giảm 50%

---

## Câu 4: Learning New Technology
**Khi nào bạn quyết định adopt một technology mới? Process của bạn?**

### Framework:
```
Evaluation Criteria:
├── Problem fit: Giải quyết vấn đề cụ thể gì?
├── Team readiness: Team có thể learn không?
├── Ecosystem: Community, documentation, support?
├── Risk: Migration path, fallback options?
└── ROI: Benefits vs cost of adoption?
```

### Ví dụ:
> Khi evaluate việc chuyển từ REST sang GraphQL:
>
> **Analysis:**
> - Problem: Over-fetching, multiple round trips
> - Team: 3/5 members có GraphQL experience
> - Ecosystem: Strong, Apollo mature
> - Risk: Backend team cần training
>
> **Decision:** Adopt cho new features, không migrate existing APIs
>
> **Outcome:** API calls giảm 60%, developer experience improved

---

## Câu 5: Architecture Decisions
**Mô tả một architecture decision quan trọng bạn từng make. Trade-offs?**

### Structure:
1. Context và constraints
2. Options considered
3. Decision và rationale
4. Trade-offs accepted
5. Outcome và lessons learned

### Ví dụ:
> **Decision:** Chọn Server-Side Rendering (Next.js) thay vì SPA cho e-commerce site
>
> **Options:**
> | Option | Pros | Cons |
> |--------|------|------|
> | CSR (CRA) | Simple, familiar | Poor SEO, slow initial load |
> | SSR (Next.js) | SEO, fast initial load | Complexity, server costs |
> | SSG (Gatsby) | Fast, cheap hosting | Build times, dynamic content |
>
> **Trade-offs accepted:**
> - Higher infrastructure complexity
> - Team learning curve
> - Server costs tăng
>
> **Outcome:**
> - SEO traffic tăng 200%
> - Conversion rate tăng 15%
> - Worth the trade-offs

---

# PHẦN 2: CÂU HỎI BEHAVIORAL (STAR METHOD)

## Câu 6: Conflict Resolution
**Kể về một lần bạn có conflict với teammate. Bạn handle như thế nào?**

### Good response framework:
1. **Acknowledge:** Conflict là normal, quan trọng là cách handle
2. **Describe objectively:** Không blame, focus vào situation
3. **Actions taken:** Cụ thể bạn làm gì để resolve
4. **Outcome:** Relationship và project outcome
5. **Learning:** Bạn học được gì?

### Ví dụ:
> **Situation:** Tôi và senior backend developer không đồng ý về API design. Họ muốn một endpoint trả về tất cả data, tôi muốn multiple endpoints để optimize frontend caching.
>
> **Approach:**
> 1. Schedule 1:1 meeting để understand perspective của họ
> 2. Prepare data: Performance impact của mỗi approach
> 3. Propose compromise: One endpoint với field selection (like GraphQL)
> 4. Document decision và rationale
>
> **Outcome:**
> - Implemented hybrid solution
> - Better working relationship
> - Team started documenting architectural decisions

---

## Câu 7: Handling Pressure
**Mô tả một lần bạn làm việc dưới deadline pressure. Bạn manage như thế nào?**

### Key points:
- Prioritization
- Communication
- Scope negotiation
- Quality maintenance

### Ví dụ:
> **Situation:** Major feature launch trong 2 tuần, estimate ban đầu là 4 tuần.
>
> **Actions:**
> 1. **Assess:** Break down tasks, identify critical path
> 2. **Prioritize:** Define MVP, nice-to-haves
> 3. **Communicate:** Daily updates với stakeholders
> 4. **Execute:** Focus mode, reduce meetings
> 5. **Quality:** Automated tests cho critical paths
>
> **Result:**
> - Launched on time với MVP
> - Zero critical bugs
> - Nice-to-haves delivered trong sprint sau

---

## Câu 8: Failure & Learning
**Kể về một project hoặc decision mà bạn consider là failure. Bạn learn được gì?**

### Tips:
- Chọn real failure, không trivial
- Own your mistakes
- Focus on learning, không excuses
- Show growth

### Ví dụ:
> **Failure:** Premature optimization - Tôi architect complex caching system trước khi có real performance data.
>
> **What went wrong:**
> - Over-engineered solution
> - 3 tuần development cho feature ít được dùng
> - Added complexity, hard to maintain
>
> **Lessons:**
> 1. "Make it work, make it right, make it fast" - theo thứ tự
> 2. Measure before optimizing
> 3. YAGNI (You Aren't Gonna Need It)
>
> **How I apply now:**
> - Start simple, iterate based on data
> - Feature flags cho gradual optimization
> - Regular performance audits thay vì premature optimization

---

## Câu 9: Initiative & Ownership
**Kể về một lần bạn take initiative ngoài job description.**

### Ví dụ:
> **Initiative:** Tự tạo internal tool để automate repetitive tasks
>
> **Context:** Team mất ~2 giờ/tuần manually generating reports
>
> **Action:**
> - Built CLI tool (Node.js) trong off-hours
> - Integrated với Slack
> - Documented và trained team
>
> **Impact:**
> - Saved 100+ hours/năm team-wide
> - Tool được adopt bởi other teams
> - Promoted to lead internal tooling efforts

---

## Câu 10: Mentoring
**Bạn đã mentor junior developers như thế nào?**

### Framework:
```
Effective Mentoring:
├── Set clear expectations
├── Provide challenging but achievable tasks
├── Regular feedback (not just code reviews)
├── Create safe environment for questions
├── Share context, not just solutions
└── Celebrate growth
```

### Ví dụ:
> **Approach:**
> 1. **Onboarding:** Pair programming first 2 weeks
> 2. **Gradual autonomy:** Progressively complex tasks
> 3. **Feedback:** Weekly 1:1s, immediate PR feedback
> 4. **Growth:** Help define learning goals
>
> **Success story:**
> - Mentored junior từ day 1
> - After 6 months: independently delivering features
> - After 1 year: mentoring newer members
> - Now a mid-level developer

---

# PHẦN 3: LEADERSHIP & TEAMWORK

## Câu 11: Leading Without Authority
**Bạn influence team decision như thế nào khi không có formal authority?**

### Ví dụ:
> **Situation:** Muốn adopt TypeScript nhưng không phải team lead
>
> **Approach:**
> 1. **Build case:** Document benefits với concrete examples
> 2. **Prove value:** Convert one module, show results
> 3. **Address concerns:** Create migration guide, training plan
> 4. **Get allies:** Convince key team members
> 5. **Propose formally:** Present to team with support
>
> **Outcome:** Team adopted TypeScript, bug rate decreased 30%

---

## Câu 12: Stakeholder Management
**Bạn handle stakeholders với competing priorities như thế nào?**

### Framework:
```
Priority Matrix:
                    Urgent
                      │
           ┌─────────┼─────────┐
           │    1    │    2    │
Important ─┤  Do Now │ Schedule│
           │    3    │    4    │
           │Delegate │  Later  │
           └─────────┼─────────┘
                Not Urgent
```

### Tips:
- Transparent communication
- Data-driven prioritization
- Regular updates
- Manage expectations early

---

## Câu 13: Team Building
**Bạn build high-performing team như thế nào?**

### Key elements:
1. **Psychological safety:** Safe to take risks, ask questions
2. **Clear goals:** Everyone understands objectives
3. **Defined roles:** Clear responsibilities
4. **Open communication:** Regular syncs, retrospectives
5. **Growth opportunities:** Learning, challenging work

### Ví dụ practices:
- Weekly team learning sessions
- Rotating code review responsibilities
- Blameless post-mortems
- Celebrate wins (big and small)

---

## Câu 14: Handling Underperformance
**Bạn approach một team member đang underperform như thế nào?**

### Framework:
1. **Observe:** Gather specific examples
2. **Private conversation:** Understand root cause
3. **Set clear expectations:** SMART goals
4. **Support:** Provide resources, remove blockers
5. **Follow up:** Regular check-ins
6. **Document:** Keep records of conversations

### Important notes:
- Không assume malicious intent
- Focus on behaviors, not personality
- Offer support before escalation

---

## Câu 15: Remote/Hybrid Team
**Challenges và solutions khi work với remote team?**

### Challenges & Solutions:
| Challenge | Solution |
|-----------|----------|
| Communication gaps | Over-communicate, async-first |
| Time zones | Overlap hours, documented decisions |
| Building trust | Video calls, virtual social events |
| Onboarding | Detailed docs, buddy system |
| Visibility of work | Regular updates, shared dashboards |

---

# PHẦN 4: SITUATIONAL QUESTIONS

## Câu 16: Scenario - Technical Disagreement
**Senior developer insist on solution bạn believe là suboptimal. Bạn làm gì?**

### Good approach:
1. **Listen first:** Understand their reasoning fully
2. **Ask questions:** Maybe there's context you're missing
3. **Share concerns:** Data-driven, not opinion-based
4. **Propose experiment:** A/B test, prototype both
5. **Escalate if needed:** Involve tech lead for decision
6. **Commit regardless:** Once decided, fully support

---

## Câu 17: Scenario - Unrealistic Deadline
**PM commit deadline bạn believe không realistic. Approach?**

### Response framework:
1. **Don't immediately say no**
2. **Break down work:** Detailed estimate
3. **Identify risks:** What could go wrong
4. **Present options:**
   - Option A: Full scope, need X weeks
   - Option B: Reduced scope (MVP), meet deadline
   - Option C: Add resources, might meet deadline
5. **Let business decide:** Provide data, not ultimatums

---

## Câu 18: Scenario - Production Bug
**Critical bug discovered Friday 5pm. How do you handle?**

### Decision tree:
```
Critical Bug Discovered
        │
        ▼
Impact Assessment ─────┐
        │              │
        ▼              ▼
    High Impact    Low Impact
        │              │
        ▼              ▼
    Fix Now        Document,
        │          Fix Monday
        ▼
Quick Fix Available?
        │
    ┌───┴───┐
    ▼       ▼
   Yes      No
    │       │
    ▼       ▼
  Hotfix  Rollback
           + Fix
```

---

## Câu 19: Scenario - Knowledge Sharing
**Bạn là người duy nhất hiểu một critical system. Bạn làm gì?**

### Actions:
1. **Document:** Architecture, decisions, gotchas
2. **Pair programming:** Share knowledge actively
3. **Cross-training:** Rotate responsibilities
4. **Internal talks:** Present system to team
5. **Runbook:** Step-by-step for common operations

---

## Câu 20: Scenario - New Team Member
**New senior developer joins, họ có strong opinions khác với team practices. Handle?**

### Approach:
1. **Welcome different perspectives:** Fresh eyes are valuable
2. **Explain context:** Why current practices exist
3. **Evaluate suggestions:** Merit-based, not ego-based
4. **Set expectations:** Team decisions are collaborative
5. **Integration:** Give them ownership of improvements

---

# HƯỚNG DẪN TRẢ LỜI

## STAR Method Template

```
Situation: [Context - ngắn gọn, đủ background]
Task: [Vai trò và responsibility của bạn]
Action: [Cụ thể BẠN làm gì - dùng "I", không phải "we"]
Result: [Outcome - quantify nếu có thể]
```

## Do's and Don'ts

### Do's:
- ✅ Chuẩn bị 5-7 stories có thể adapt cho nhiều câu hỏi
- ✅ Quantify results (%, numbers, time saved)
- ✅ Show growth và learning
- ✅ Be specific, không generic
- ✅ Practice out loud

### Don'ts:
- ❌ Blame others
- ❌ Overly negative về past employers
- ❌ Take sole credit cho team efforts
- ❌ Lie hoặc exaggerate
- ❌ Give one-word answers

## Common Follow-up Questions

Chuẩn bị cho những câu hỏi follow-up:
- "What would you do differently?"
- "How did others react?"
- "What was the biggest challenge?"
- "What did you learn?"
- "How do you apply that learning now?"

## Questions to Ask Interviewer

Cuối interview, hỏi những câu demonstrate thinking:
- "What does success look like for this role in 6 months?"
- "What are the biggest technical challenges the team is facing?"
- "How does the team handle technical debt?"
- "What's the code review process like?"
- "How do you measure team performance?"

---

## 📚 TÀI LIỆU THAM KHẢO

1. [The Manager's Path - Camille Fournier](https://www.oreilly.com/library/view/the-managers-path/9781491973882/)
2. [Staff Engineer - Will Larson](https://staffeng.com/book)
3. [Crucial Conversations](https://cruciallearning.com/crucial-conversations-book/)
4. [STAR Interview Method](https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique)
