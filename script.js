document.addEventListener('DOMContentLoaded', function() {
    const teachers = document.querySelectorAll('.teacher');
    const officeInfo = document.getElementById('office-info');
    const searchInput = document.getElementById('search-input');

    // 선생님 이름을 클릭하면 교무실 정보를 표시하는 기능
    teachers.forEach(function(teacher) {
        teacher.addEventListener('click', function() {
            const office = teacher.getAttribute('data-office');
            officeInfo.textContent = `${teacher.querySelector('h3').textContent} 선생님은 ${office}에 있습니다.`;
        });
    });

    // 검색 기능 추가
    searchInput.addEventListener('input', function() {
        const searchValue = searchInput.value.toLowerCase();

        teachers.forEach(function(teacher) {
            const teacherName = teacher.querySelector('h3').textContent.toLowerCase();
            if (teacherName.includes(searchValue)) {
                teacher.style.display = 'block';
            } else {
                teacher.style.display = 'none';
            }
        });
    });
});
