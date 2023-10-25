document.addEventListener("DOMContentLoaded", () => {
    const gridViewButton = document.getElementById("gridView");
    const listViewButton = document.getElementById("listView");
    const membersContainer = document.querySelector(".members-container");

    let isGridView = true;

    gridViewButton.addEventListener("click", () => {
        isGridView = true;
        renderMembers();
    });

    listViewButton.addEventListener("click", () => {
        isGridView = false;
        renderMembers();
    });

    function renderMembers() {
        // Load data from members.json
        fetch("data/members.json")
            .then((response) => response.json())
            .then((data) => {
                const members = data.members;
                membersContainer.innerHTML = "";

                members.forEach((member) => {
                    const memberElement = isGridView
                        ? createMemberCard(member)
                        : createMemberListItem(member);
                    membersContainer.appendChild(memberElement);
                });
            });
    }

    function createMemberCard(member) {
        const card = document.createElement("div");
        card.classList.add("member-card");

        const img = document.createElement("img");
        img.src = member.image;
        card.appendChild(img);

        const name = document.createElement("h2");
        name.textContent = member.name;
        card.appendChild(name);

        const address = document.createElement("p");
        address.textContent = member.address;
        card.appendChild(address);

        const phone = document.createElement("p");
        phone.textContent = `Phone: ${member.phone}`;
        card.appendChild(phone);

        const website = document.createElement("p");
        website.innerHTML = `Website: <a href="${member.website}" target="_blank">${member.website}</a>`;
        card.appendChild(website);

        return card;
    }

    function createMemberListItem(member) {
        const listItem = document.createElement("div");
        listItem.classList.add("member-list-item");

        listItem.innerHTML = `
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        `;

        return listItem;
    }

    // Initial render
    renderMembers();
});
