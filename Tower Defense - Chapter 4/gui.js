export function createTowerGui_open()
{
    document.getElementById("createTowerDiv").style.display = "block";
}

export function createTowerGui_close()
{
    document.getElementById("createTowerDiv").style.display = "none";
}

export function infoTowerGui_open(tower_posx, tower_posz)
{
    document.getElementById("posXinfo").innerHTML = tower_posx;
    document.getElementById("posZinfo").innerHTML = tower_posz;

    document.getElementById("TowerInfoDiv").style.display = "block";
}

export function infoTowerGui_close()
{
    document.getElementById("TowerInfoDiv").style.display = "none";

    document.getElementById("posXinfo").innerHTML = "NULL";
    document.getElementById("posZinfo").innerHTML = "NULL";
}
