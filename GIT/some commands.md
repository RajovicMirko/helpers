- [GIT UPUTSTVO](#git-uputstvo)
  - [KREIRANJE REPOZITORIJUMA](#kreiranje-repozitorijuma)
  - [KREIRANJE NOVE GRANE](#kreiranje-nove-grane)
  - [SPAJANJE IZMENA NA MASTER SA DRUGE GRANE](#spajanje-izmena-na-master-sa-druge-grane)
  - [BRISANJE SVIH LOKALNIH IZMENA](#brisanje-svih-lokalnih-izmena)
  - [BRISANJE GRANE](#brisanje-grane)
  - [UKLANJANJE KREDENCIJALA SA PROJEKTA](#uklanjanje-kredencijala-sa-projekta)

# GIT UPUTSTVO

## KREIRANJE REPOZITORIJUMA
```
git init - kreiranje inicijalnog repozitorijuma
git add . - dodavanje fileova u lokalni repo
git commit -m "komentar"
git remote add origin https://github.com/m3nteam/ordercontrol.git (Kreran na GitHub-u i uzet link)
git push origin master
```

## KREIRANJE NOVE GRANE
Kreiranje novog branch-a i checkout u jednoj komandi

Primer kreiranja test brench-a
```
git checkout -b test
```
Dodavanje remote test branch-a
```
git push -u origin test
```

## SPAJANJE IZMENA NA MASTER SA DRUGE GRANE
Primer spajanja test branch-a sa master-om
```
git checkout master
git pull
git checkout test
git pull
git rebase -i master
git checkout master
git merge test
```

## BRISANJE SVIH LOKALNIH IZMENA
```
git fetch --all
git reset --hard origin/"grana na kojoj se nalazite"
```

## BRISANJE GRANE
Primer brisanja test branch-a

Brisanje lokalnog
```
git branch -d test
ili
git branch -D test
```
Brisanje remote

remote_name je link sa github-a (npr. https://github.com/RajovicMirko/test.git)
```
git push <remote_name> --delete test
ili
git push <remote_name> :test
```

## Uklanjanje kredencijala sa projekta
prilikom push-a ce traziti username i password
```
git config --local credential.helper ""
```
