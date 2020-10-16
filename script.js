const data = [
    {
        quest : "Nganh nghe",
        ans : [
            {
                text : 'hoc sinh muon tim hieu cntt',
                to : 'em thich ve ko'
            },
            {
                text : 'dang di lam hoac sinh vien chan hoc ',
                to : 'tai sao ban muon hoc lap trinh'
            },
        ]
    },
    {
        quest : "tai sao ban muon hoc lap trinh",
        ans : [
            {
                text : 'kiem tien',
                to : 'co y tuong sang tao nao ko'
            },
            {
                text : 'thich',
                to : 'co y tuong sang tao nao k'
            },
            {
                text : 'cai thien ban than',
                to : 'muon lam mot cong viec theo nganh nao'
            },
        ]
    },
    {
        quest : "muon lam mot cong viec theo nganh nao",
        ans : [
            {
                text : 'cty lon',
                to : '#'
            },
            {
                text : 'startup',
                to : '#'
            },
        ]
    },
]
const container = document.getElementById("container")
data.forEach(item => {
    const div = document.createElement('div')
    div.classList.add('sec')
    div.id = item.quest
    const quest = document.createElement('div')
    quest.innerHTML = item.quest
    div.appendChild(quest)
    item.ans.forEach(item => {
        const link = document.createElement('a')
        link.href = `#${item.to}`
        link.innerHTML = item.text
        div.appendChild(link)
    })
    container.appendChild(div)
})