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

# THANG CHẤM CÂU TRẢ LỜI

Phần trên cho khung và ví dụ. Phần này cho cách **tự chấm**: đọc lại câu trả lời của mình
và xem nó rơi vào mức nào, thiếu dấu hiệu gì.

## Thang 5 mức

Áp dụng được cho mọi câu behavioral. Điều phân biệt các mức không phải là kể hay hay dở,
mà là câu chuyện có kiểm chứng được hay không.

| Mức | Dấu hiệu quan sát được |
|---|---|
| **0 — Không trả lời được** | Không nhớ ra tình huống nào, hoặc kể chuyện của đội mà không nói mình làm gì |
| **1 — Kể chuyện chung chung** | Có tình huống nhưng toàn "chúng tôi", không có hành động cụ thể của bản thân, không có kết quả |
| **2 — Có hành động, thiếu kết quả** | Nói rõ mình làm gì, nhưng kết thúc bằng "và mọi thứ tốt hơn" — không có con số, không có bằng chứng |
| **3 — Đủ STAR** | Có bối cảnh, vai trò, hành động cụ thể, kết quả kèm số liệu. Trả lời trôi chảy khi bị hỏi chi tiết |
| **4 — Có phản tư** | Đủ mức 3, cộng thêm: nói được đã cân nhắc phương án nào khác, vì sao không chọn, và nếu làm lại sẽ khác chỗ nào |

Mức 3 là ngưỡng qua cho vị trí Senior. Mức 4 là thứ phân biệt Senior với Lead — người phỏng vấn
muốn biết anh có học được gì từ chính quyết định của mình không, hay chỉ nhớ là nó đã thành công.

## Bốn thứ mọi câu trả lời phải có

Thiếu bất kỳ cái nào là tụt xuống mức 2 hoặc thấp hơn.

1. **"Tôi" chứ không phải "chúng tôi"** — người nghe cần biết phần việc của riêng anh. Dùng "chúng tôi"
   cho bối cảnh, "tôi" cho hành động.
2. **Con số ở phần kết quả** — trước bao nhiêu, sau bao nhiêu, trong bao lâu. Không có số thì không
   phân biệt được với chuyện bịa.
3. **Một quyết định có đánh đổi** — mọi lựa chọn kỹ thuật đều mất gì đó. Nói được mất gì thì câu chuyện
   trở nên thật.
4. **Độ dài dưới 2 phút** — quá 2 phút là người nghe mất mạch. Kể phần cốt lõi, để họ hỏi thêm.

## Dấu hiệu bị trừ điểm

- Đổ lỗi cho người khác, cho đội khác, hoặc cho công ty cũ
- Số liệu tròn trịa đáng ngờ ("nhanh hơn 10 lần", "tăng 100%") mà không nói đo bằng gì
- Kể một lần thất bại nhưng thực ra là khoe ("điểm yếu của tôi là quá cầu toàn")
- Mọi câu chuyện đều kết thúc thành công — không ai có sự nghiệp như vậy
- Nói về công nghệ nhiều hơn nói về quyết định và con người

## Chấm theo từng câu

Với mỗi câu: dấu hiệu của câu trả lời mạnh, chỗ thường bị trừ điểm, và hai câu đào sâu
hay bị hỏi tiếp. Chuẩn bị sẵn phần đào sâu, vì đó mới là chỗ phân biệt.

### Câu 1 — Project phức tạp nhất
**Mạnh:** nói được *vì sao* nó phức tạp (quy mô, ràng buộc, con người) chứ không chỉ là dùng nhiều công nghệ.
**Yếu:** liệt kê tech stack thay vì mô tả vấn đề.
**Đào sâu:** Phần nào suýt hỏng? · Nếu làm lại từ đầu thì bỏ cái gì?

### Câu 2 — Tối ưu hiệu năng
**Mạnh:** có số đo trước và sau, nói rõ đo bằng công cụ nào, và đã loại trừ những giả thuyết nào trước khi tìm ra nguyên nhân.
**Yếu:** nhảy thẳng vào giải pháp ("tôi thêm useMemo") mà không có bước đo.
**Đào sâu:** Sao biết đó là nút thắt chứ không phải chỗ khác? · Sau khi sửa có gì tệ đi không?

### Câu 3 — Nợ kỹ thuật
**Mạnh:** nói được cách thuyết phục người không rành kỹ thuật, và cách đo tác động của nợ.
**Yếu:** than phiền về code cũ mà không có hành động cụ thể.
**Đào sâu:** Có khoản nợ nào anh cố tình để lại không? · Vì sao?

### Câu 4 — Học công nghệ mới
**Mạnh:** có phương pháp lặp lại được, và nói được lần nào học xong rồi quyết định không dùng.
**Yếu:** kể tên khoá học đã xem.
**Đào sâu:** Lần gần nhất anh đánh giá một công nghệ rồi từ chối nó là khi nào? · Dựa trên tiêu chí gì?

### Câu 5 — Quyết định kiến trúc
**Mạnh:** nêu được ít nhất hai phương án đã cân nhắc và tiêu chí chọn, cộng đánh giá lại sau vài tháng.
**Yếu:** chỉ mô tả kiến trúc đã chọn như thể không có lựa chọn nào khác.
**Đào sâu:** Sáu tháng sau nhìn lại, quyết định đó còn đúng không? · Chi phí lớn nhất của nó là gì?

### Câu 6 — Xử lý bất đồng
**Mạnh:** tách được vấn đề kỹ thuật khỏi vấn đề con người; có lần anh là người nhượng bộ.
**Yếu:** mọi bất đồng đều kết thúc bằng việc anh đúng.
**Đào sâu:** Có lần nào anh sai không? · Lúc đó anh xử lý thế nào?

### Câu 7 — Chịu áp lực
**Mạnh:** nói được cách cắt phạm vi và cách thông báo cho các bên, không phải cách làm nhiều hơn.
**Yếu:** "tôi làm thêm giờ" là câu trả lời của người chưa biết đàm phán phạm vi.
**Đào sâu:** Anh đã cắt cái gì? · Ai là người quyết định cắt?

### Câu 8 — Thất bại và bài học
**Mạnh:** một thất bại thật, có hậu quả thật, và một thay đổi cụ thể trong cách làm việc sau đó.
**Yếu:** thất bại giả trang thành ưu điểm, hoặc lỗi thuộc về người khác.
**Đào sâu:** Ai chịu ảnh hưởng? · Anh đã nói với họ thế nào?

### Câu 9 — Chủ động và trách nhiệm
**Mạnh:** việc anh tự nhận làm mà không ai giao, và nó tạo ra thay đổi đo được.
**Yếu:** kể việc được giao rồi hoàn thành tốt — đó là làm tròn việc, không phải chủ động.
**Đào sâu:** Anh lấy thời gian ở đâu để làm việc đó? · Có ai phản đối không?

### Câu 10 — Kèm cặp người mới
**Mạnh:** nói được tiến bộ của người được kèm, không phải nỗ lực của mình.
**Yếu:** mô tả những gì mình đã dạy thay vì những gì người kia làm được sau đó.
**Đào sâu:** Có ai anh kèm mà không hiệu quả không? · Anh đổi cách thế nào?

### Câu 11 — Dẫn dắt khi không có chức danh
**Mạnh:** thuyết phục bằng dữ liệu hoặc bằng bản mẫu chạy được, không bằng thâm niên.
**Yếu:** "tôi giải thích và mọi người đồng ý" — thiếu phần vì sao họ đồng ý.
**Đào sâu:** Có ai không bị thuyết phục không? · Anh làm gì với người đó?

### Câu 12 — Làm việc với các bên liên quan
**Mạnh:** dịch được chi phí kỹ thuật sang ngôn ngữ kinh doanh, và nói rõ đã từ chối điều gì.
**Yếu:** nhận mọi yêu cầu rồi than thiếu thời gian.
**Đào sâu:** Lần gần nhất anh nói không với PM là khi nào? · Anh lập luận thế nào?

### Câu 13 — Xây dựng đội
**Mạnh:** một thay đổi cụ thể trong quy trình, kèm cách đo xem nó có tác dụng không.
**Yếu:** liệt kê hoạt động gắn kết mà không nói kết quả.
**Đào sâu:** Có thay đổi nào anh thử rồi bỏ không? · Vì sao nó không hiệu quả?

### Câu 14 — Xử lý người làm việc kém
**Mạnh:** tìm nguyên nhân trước khi kết luận, có mốc thời gian rõ ràng, và tôn trọng người đó.
**Yếu:** kết luận về năng lực ngay, hoặc né tránh cho tới khi vấn đề tự biến mất.
**Đào sâu:** Anh phát hiện bằng cách nào? · Có phải vấn đề của người đó không, hay của cách giao việc?

### Câu 15 — Đội làm việc từ xa
**Mạnh:** chuyển từ giao tiếp đồng bộ sang bất đồng bộ bằng thay đổi cụ thể trong tài liệu và quy trình.
**Yếu:** "họp nhiều hơn để bù" là đi ngược hướng.
**Đào sâu:** Cái gì hỏng khi làm từ xa mà trước đó không hỏng? · Anh chữa thế nào?

### Câu 16 — Bất đồng kỹ thuật (tình huống)
**Mạnh:** đề xuất cách kiểm chứng bằng thực nghiệm nhỏ thay vì tranh luận tiếp.
**Yếu:** leo thang lên cấp trên ngay từ đầu.
**Đào sâu:** Nếu thử nghiệm cho kết quả trái ý anh thì sao? · Mất bao lâu để biết?

### Câu 17 — Hạn chót phi thực tế (tình huống)
**Mạnh:** đưa ra lựa chọn cho người quyết định — cắt phạm vi, lùi hạn, hoặc thêm người, kèm hệ quả từng cái.
**Yếu:** nhận hạn rồi hy vọng kịp.
**Đào sâu:** Anh trình bày với ai? · Họ chọn phương án nào?

### Câu 18 — Lỗi trên production (tình huống)
**Mạnh:** khôi phục trước, tìm nguyên nhân sau; có thứ tự ưu tiên rõ ràng và biết ai cần được báo.
**Yếu:** lao vào debug ngay trong khi người dùng vẫn đang gặp lỗi.
**Đào sâu:** Anh quyết định rollback hay hotfix dựa trên gì? · Sau đó thêm hàng rào gì?

### Câu 19 — Chia sẻ kiến thức (tình huống)
**Mạnh:** giải quyết gốc rễ — tài liệu hoặc công cụ — thay vì lặp lại việc giải thích.
**Yếu:** tổ chức buổi chia sẻ rồi không có gì thay đổi.
**Đào sâu:** Làm sao biết kiến thức đó đã lan ra? · Có ai dùng lại tài liệu của anh không?

### Câu 20 — Thành viên mới vào đội (tình huống)
**Mạnh:** có mốc cụ thể — bao lâu thì lên production lần đầu — và giảm dần sự phụ thuộc.
**Yếu:** kèm sát mãi, biến người mới thành phụ thuộc.
**Đào sâu:** Người mới của anh mất bao lâu để tự làm được? · Anh đo bằng gì?

## Cách dùng thang này để luyện

1. Chọn 6 câu tương ứng với 6 ô ở [PLAYBOOK.md](./PLAYBOOK.md) mục 7
2. Ghi âm câu trả lời của mình, bấm giờ
3. Nghe lại và tự chấm theo thang 5 mức
4. Với mỗi câu dưới mức 3, xem lại thiếu dấu hiệu nào trong bốn thứ bắt buộc
5. Tự hỏi và tự trả lời hai câu đào sâu — đây là phần hay bị bỏ qua nhất

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
