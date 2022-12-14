/** 오버라이드 */

class Terran {
    /** 모든 객체가 갖는 명사적 특성들을 멤버변수로 정의 */
    constructor(name, hp, dps) {
        this._name = name;  // 이름
        this._hp = hp;  // 체력(health point)
        this._dps = dps;    // 초당공격력(damage per Second)
        console.log("[%s] 체력 : %d, 공격력 : %d", name, hp, dps);
    }

    attack(target) {
        console.log(this._name + "(이)가 " + target + "(을)를 공격합니다. 데미지 : " + this._dps);
    }
}

class Marine extends Terran {
    // attack 메서드 override
    attack(target) {
        console.log(this._name + "(이)가 " + target + "에게 사격을 게시합니다. 데미지: " + this._dps);
    }
}

class Tank extends Terran {
    attack(target) {
        super.attack(target);
        console.log(' >>>>>> 탱크 포격');
    }
}

class Firebat extends Terran {
    constructor(name) {
        super(name, 500, 50);
    }
}

const m = new Marine("해병1", 120, 30);
m.attack("질럿");

const t = new Tank("탱크1", 120, 30);
t.attack("드라군");

const f = new Firebat("화염방사병");
f.attack("적");