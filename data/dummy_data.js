import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Tanque', '#4eeadc'),
  new Category('c2', 'Luchador', '#f54242'),
  new Category('c3', 'Mago', '#f5a442'),
  new Category('c4', 'Soporte', '#f5d142'),
  new Category('c5', 'Distancia', '#368dff'),
  new Category('c6', 'Asesino', '#41d95d'),

];

export const MEALS = [
  new Meal(
    'm1',
    ['c6','c4'],
    'Pyke',
    'affordable',
    'simple',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg',
    20,
    [
      'Vida: 670.00',
      'Regeneración de vida: 7.00',
      'Armadura: 47.00',
      'Resistencia mágica: 32.00',
      'Maná: 415.00',
      'Regeneración de maná: 8.00',
      'Daño de ataque: 62.00',
      'Velocidad de ataque: 0.667'
    ],
    [
      'el Destripador de los Puertos.', 
      'Cuando era un muchacho, ',
      'Pyke se buscaba la vida como otros muchos en Aguas Estancadas:',
      'en los muelles del matadero.',
      'Todos los días se transportaban monstruosas criaturas',
      'de las profundidades a las carnicerías del puerto para despiezarlas.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2','c3'],
    'Sylas',
    'affordable',
    'simple',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGBUaFxcWFxUYGhcaGBcWFhoYFxcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICYtLS0tLS8tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKwBJAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAgMEBgcBAAj/xAA8EAABAwIEBAQDBwMDBAMAAAABAgMRACEEBRIxQVFhcQYTIoGRobEHMkJSwdHwFCPxYnLhFYKSojOywv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACoRAAICAgIBAwMEAwEAAAAAAAABAhEDIRIxQQQTIlFhcSORofBCsfEy/9oADAMBAAIRAxEAPwCqRevEU8Eg2Mg+/wClSUYabEEHgSLHsaFj0DgvnXVtA1Ody48qFYlLjfaimChC2yKdQJpOHxxWYUBPS1SdAooAptXA0ytcTUh/1JBG4+dCziJtXI4WtWqmUL00hKyCeVJxmL1XgTxj5U6QDuMdiDUFx29KdemKiqXXWAddcpOum66E1wDxVXUpUdppKd6K4Yemic2Q2MIo8qUvCKFgZ7UpLhC77VMwxoi2D1YQjc0y4waM41IAocVVzRyZE8o1ypSqZUKUaxSDakuL/SvBUT1pKEg7mBFccSHHUwmBePV1M0RaxqI+6bAJEnYzv9R70LwzZSULUPSTbrBvS8biCtxS4idu1AIrzDJNddNh12qIokWPw71xK6ZUcT8K3U0JioGHeiprRmhQR5DdPtWpApJcilOCGH50awOG1pOn0ji4RMdED8SvkKE5W0Twnpw9zR9p8ITC1AdBYfvSSY8UMPZchtCigSq/qUZUes8+1Av6gbEmeNGM0x6AkpSQVHiOHvzqvLI3410bOY4XxXqjivU1ihIJtRbDYUFIKFEcxM37GgLOLEwbGjOUYjSSDsd6WSGTCLOEc/CtM8lJ9Ku8fd70h/LlkEutaY+9pIJE8YMW7TRvDYYlMpg9qm+clSNJ9JAgf8ftSDGZZplKmzrAtUZp8qo7mebFmWlwtN4EXHTqN/hVZSsrUpSEwkX3mKpGxJE4Kg96hZgxBSqBcTHODH6fKu4jaZpOJI8nWT6ibfOSedU0hSGpd+wqAtdOIxJTqiDqBSZ6wfjaoxNAArVSRXIpSKIDopQNK03pIogPCp7CrVBipuHTauAxl4Xpt5wgxypeMfiyd+dQiaDYUiQnFKE8Z3muf1HSo5NeihbDRO1SKZJr2GMgikq3ogPLNqapxVIiuCT8ZigpppP5ZpkrJg6YiAm1jH+ai1J82UhMC03vMcuUUDrGnTJk0kV1dIBonIlNrvRFlyNqEINxUtt2KKYQsCo7AmlMNXvUvC5okITA7ibHr0NQ3XCFFR43psmPjIEZWial4iACekUlbpJkyT1qIMTyNOok3+tSY6FDSCCq44gGPaeFMrcmp+Gy9S78P5sKeXgUp4gmksagcB0r1SS3XqYAziEzun3Fdw74TvIPWrYzlYVw+U0rG5ElxGnYjYgcfrScguIIwGaOIMhRjvU97PCoSffYf5oDicseYNxI5jjTCsQNiIPWjSYNoIJZbcGtSNSjclRkDsOVNP4gFJSlKUt7lKbKIkXJ2E8O9R9ZI0g72qKW4QUi6yvYH8ITM/zlV8OO3sSc9aB+KcB4e9RcU6SAOQiluu7jrURxUmhLsVDZ506WwEoVuTMjsbfrTW9T2WITfv2oUFsitjem0in2BY020m9EA4i9LDVcw4vUxAogIZRXSokW2Hzp7ECLc6ccZhqedB/YaK8gpQJNIg78vrUhQMSK5hYuDseXCkego9hsKVn5/GpYy8H9KmYTAatJAUZbEeWPxAx6vc/KlJwzmoNq+9qAIkJkXOmeExvVPbYU0BQjSuAffhXV1MzbCeU8UWlOnUAZCSZIT8NPxr2MwhACtweNBppg7ICqQRSzXIoCnkxBHExHxqZj2wlQA/KJqIkwR3FOvu6lE8/8Vxw2pNcCKUDXaJwilJNNqNcmgEIMuRFSPMUo9aHsqmiGEbkgc6ovk6A9InIShIGmSeZ4+3CpuX4YuKk2Sn61JxGGSlSihPpASmSR9+AVbcAZE0yHY9CTbj1sKXNicHQcc1JWTMXi49CT3qH5lIdRNxUdMzeo9FCYEjjPxr1Mh7kCfavV1nUaUyyRwpx8RcC9F0soWJBkfz4UC8QYwtKSy0NTy9h+QHYnry+NQTsrRExmJA39M9J1f7U7k9qrGKyrWFLcMLUTAEDSJgC3GAJ6mrF/0U4dJdXLjqgbiSSeCRN7mh67pEzIEKFwQoD1A8iDNMn9DqKa424hRG4E7dN6huvm/qvz6GrerCAYJx0wVLXoTuYCgFqgncwInhJqj4mt/DjBMxcrk0R3bE+9+Bi0jpUdddJvXcO3qUBzNRKD2AblYospNMsIAf08Eg/IXqScwBOkJAH8vPOmQjBeERY96aZTepeEeCW1R94mOwsaYYTea4JxhF6lzApGHbuaVjBEe/6V3SOW2OJTqi19qdLCidJ4SIv2NO5MgymPvEmOpFx270SOE/unTCwCT6TM3mKdY3JWU6RWfJ0khQ2n6U4/lakpDjd0nccUn9RyqyY3KPNJ0WIAidtrg8qey3BqDSkLEFJSoX3B9Kojfhse4qy9PbpkJ5K2ivZBjlIWUKUUahEjeJJMT+K5Hxo24ywPQXdSzsQO8fhseckwJoHniAX9Kbj0i3UDYdzUnJXHVJcBkhOkXHG8iYknbjxqkFT9t7oVvXJArEJUtxSlfeUSo9JO3talrBAgkxxE2o+Mo9N7QRqHERcfPeoubZdpMjY/Ws+XC1svjmugBikDh/BTIqTiB6aYSaghpLY2tNdFLmvFNcIJFKNJNdmicNkVylKrhoBH8LYGaINnTC9QBGyTMqvwprJEBStJE8RSMYypp9TahdCiDO1rbHhFWgnFKYjkm+JY2s5SWlJ0kk8eR5+9/jQ5LygSedRg5y96smR5Sh1BLmqVKISUidJSAZUOKfUBbrT5G8mwRqA/kuWOPiwCUDdR3J/WjGKylhgDUCpR2TGpSiOSRUvK8xQFow7YAGmdUgjaYEG5O/6UWTgzqJStYJ+8UhEkciVJNunyrz2zWivNZViVCUtJQOAUYPuADFeqyLwYJklRPUg/UVyhZxP8RYzyUQkAuuWQNu6jF4H7VEyLIvKl55ZU4oHUVRABjeRM2/SlZMwvFPLxRAA2b1XCUAwn0gi9iTfc0VxGCKrOLUroPSJHQfrNSutFAXiXxM6ieQi47cZqmrdW6txKbBJhUi5KjKoINjFrzWhKbCRCQB2qmZgkNrWofjV7BWw7C3ypsdWCXQjNEpUzpXCEpS4oJEwSEhKSkncANx78Ky3Emrr4qxZ0NNyTCCSbSfUoXjoBVHeNelk0kvsYIdv8sjxTmFJ1jSYOwO29v1puvI3qCKsIpa0PFMzA3HOBXH1wVcpPxqIl3SqZuB86cT6jqUR2phSdkeGK9UCSBuSAE9b70tthIsP89ag4UqghO3E/81MwUnjTKgMW0mDUXFrJUY2TA/f6fKpySBvUMKGpUbGln0Nj7HsvdIIjf9BVmadDTcm61G3T/mq/h0AKTy5+80R8RYkFhEG4Kduwq+B0nfgbIuixYIJCR6gTxjnUXNX9CVqmxAgcj0HO8VXssxSTdayOw+t6fzZ9paANS1EHaRcdLWrU5KrRn4u6YKypouOlWoyn1T1BECjORZqFPrDmlNhoFgBot7qIvPGKg4BiEqW2gEEERN4F+PHaoCmgNesXBMEG44foamrgkC4yZZHcySt0NJJB57+xO9PZi2NOkmQdieB4/wA7VTcuxRbcCuU71NxOaLcgAbEmw58/hU/eTWy0YURcamdth9aHA0QUws7/AFqE40U7isrTRRuzoNOBNqZTT7P71wjGFV6lOim5rjjhr0V6lJFAJNyhwJUpREgJNpImSBuNt6fzt4LfUsGQqDPsKHtmJ7fqK6TtVef6fEnw+fIIYKCoCtHyENhlA2WrSsGbEBa0KB5ESk9Z41mWX/eHcVouQslTQ3sh1MxsdaVR8CPnVYy/SaFkvmh9WWEepI+7cKSIKVSTNuvGrlg3UqbQsD7wSfiJpjDYYJBAAAI9qfyRk+SkRdJWPgtUfKvKlI3pDi3I4CvVJOFJ/wA16lsNEvw7hdGHQI/gsPkKkYhpNyZqUhkISEiYAA+FqbW2Ve1KwJgBTZiSqqfj4l0b6Ry4qEC/Hj8a0DE4IaTBI+FUHOFeWHZB/CrV3hN/dPzpsf8A6Gl0UfO35DcxrCfVBmxAInkbmqs6asGeIgIVxU2Cb8ZIn4R86rjhr08z3owwEmvI3rgNLw8ahO01Ec8velBU2rjhvavAXtRAEMvMJUO/0pTZhKosYNNYFQKVXvc/KnGzY9jTCeRlOOkEKF+B4e4pLK4qKlNqlOJSEJ5mZqbZVaJjGLA0gyQFTFNOPF1dxbeBTWCwq3DDYJ4nkB1NG8BlmkcZ41bFc9BkwQ7htF5MfTvTXnA2BJqw+JsEprDNqIutYB6J0qInkSQPhQDCob0nzAdlaYSCVKgACYsJuTPsa0Sx06JqdqyXlOJKF6T6Qq1+BNgaTjnNZWeSlA/E1DYJsk7Gw6H9ppYUEkpII5/z3pZN8K8COK5cj2CwvmL07DieQ/erPhsM22IsO+9D/DDIUVjUlN0+pRAAF+dX3JPBrLpkvhSeJRBP1itGGEY4+b7DLZTsWkKuDI573/ehWKYjfatH8S/Z8ltIewz0gE6kq2I5GP1iqVicJAv1HYj+CouUZ2kGnErC2Ym1KYFTcS3wHvUdwBM86ytUxiK5wpk09N6QoUoRAp0CkgU6hNcceGx7V1CZJrrgtynjT2FSJIBB24EfpQb0Ek5U1KwOo+tajkSIabA3UtyewvP/AKpHvWd5U1/cT3T9a07wyySGpmPLJ99Z/SPjVIv4MnJXJFhwZB9PHkd+/WiOWolM8yfhJ/zVf8QYMrCEJBKpJECSItPa9FcJkaQZCl2/CpRAEWsRw9q86XZtXQYGGFeppGGgRpX7Oq/Ug16lBYRK0nYg9r/ShH/VQcYWEmdLZKuhJED4U54fzVDogkh4D1IXYj/aNtPb3qu5GAc0xhHApHyE/Shk6BFdlzW2FSDWVfapgVtqaQm6XNyOadgr/wAifY1pqySowYqh/azmKsM5hH0RI1yDsQI/c/Gk9NlamdOOqszXxahCVFDf3ExF9VpMweInbpFVNYq9Z4hl5CXWZCVagsG+iSCPhJH/AGzVO/p/7gQqReLC/cCvZyvklIyQVaIQFGm/D7gGtakoEAkXJEj61fcp8CNYZoYvEEzEoSrqLEiLVU88zIOHSizYJPVRO6j+3CsXu30X4FZeRCiBcUnY06+ZVNNRV10TY40ak64T3sKiN1LSfSKZC1siC1GctwfnAq1Rp/DFzbtAFt6gJwqibX6VfPBuYMsFKFt+WeOo6tajAAAIkWEAX3Pas2aThHRpxQUnsKeDPC4xDiU6fKaQnXzKiYG/Hfer7mPhzCtNhCGpWowkm5tcnsBTOR4tIdludJSBbhBM+3/FEcc9qWqbFLKgkE3lZ4c7D61L0s3JXsfOqdGbY7AnENYyY8tpITtdJQnzNfXSpQt/DnWXOr8spSQAsaTAvBKVEA8JKUz2r6CyjKUJaeIB1qU6kweKoTPw0/8AiOVY14owgbfK0Nltk2SsCy1AmSSLTI969bFm9yfGXgzSx1G0BXsvuImPpyvUz/pBURe6yAeAEkXJ5ftUrDOJtCye4i/xNWXL8QgBBUmSmFekhMescYJuPbpXr4fTwkrow5cjiN5RlBZVCdJiJABtYETaDvwJmr6vFtJUhRaABSiVaSNKohQkbCRvtfajrJaKErEJkSoqMwepP/FJwuJbdJCVoXG4BSbbcOFeTmUZ21Fr+/gpi9RT3sB/1ADymFbOJlJ4KAkgjqLgxzTzqm+Icn0gmPxAi4vwPYbVes1yNIDZQmPLc1p6A/eA6cYqteInoHaoQbtX/wBNEpJ9GaZogIkcZ4UDdG5/nGjeZJ1KJnnblQHEXNdPs5CE04RXAIropA0cCaP+G/Di8USEqSkCBKuZ2AHH+b0FSmrt4RRDap4hSrGD6Ra/cCmhFSdB6ImZ/Z9j0pISyHL7trR8YUQflUDLfDmJSvS6ytkKUEhbiFJSCJmTG3Wtj8M56HkBKyA6IBm2vkR1ozi2kqGlQBB4GsryNdjqKe0UbL/s4KYWcSn2RbY8SqrVhcOhrTC0qShASdIUdtMEkCOB40Fx2VPNyWiVI/KJJHsN/aged+IlIDaEPC3pLKQNI/MXZvrJ2BFr+6S9R/iPHD5NFy1tKllziUgJSdwiZkjhJvRRuCJEEc6qjeZNBK2pS36hq9SUlaTsAVEb2nc3o3l2IdVIU0GkJskagSevpsBUFNS2ijg0EyRXqjqTP4iPhXqNi8QJl2AwzhDoTpcSPulSpaMSQLyg9NuXOgXgF/14t4zdduO6jxqF46cwoUXWsQoYhekaW1Ag2iSAJBI609l6xhsMy0SQ48sLKuQG09zNJmmlHRTHC9F8ZxQAJis4+2gKWjDAAmA4pUXidIk/Crc7iTpMntQbxZ4gYQ63hFzq0IvEgleybXn96yYJtSspkxox3LsUpudik7g8f2NW/wADLy9GKD7+6Unywv7qVfmjieVR/FOQaHYQ0pFpMggGfyiq3icEtNiDXoxz8lSZB4kiyeOfFS8Y6QFQyg269TzqsvZc+pnzw2ryQY1cuAURwTNp2mtiyr7NsIMM0rEoUtzSFKGpQSFETphO4G1As4zZ9Mo8lttAGgBKNkxteeFcp26QtaMxx+WLbS04oel5BWg8wCUkd7fMVD8utT8Rs4d7LsM2hX/wjSPzJIGx7jbn3FVDNPDimEa1K4SBYzaRcWrRDKmtkZY34K82ydhvTrmBgTJmpGBbkzNF3WfTfaq2BIrbGLUhQk+9XPLsxS4kIdTb8Kp/+qx90/y9UzGswTSsqxa21Sm6fxJ3BHb9a501sZNp6Na8PvlDl16kkaZ2MkiCocFcJG/e1W9tTmlZcIJ8qxH+nb3k1lmV41JAcQSOYIMDpJEexrTEY5L7CXE2IUkOpE2uL9EmJ+I4VOONReikpOW2EsI64POSketaA4gGB6vuqB5fhoH4oyZT7DjLLYUs6bekAQRBlWw9J2o/mgMIdQASiCI3ULhSPcEkdqjofU0066ADBJvwSlI9z261q9Pr5LvRJq3Rh+aYd3COeW+0psjbYgx+VQsacw+MDgISSbSYFwOfarN9oHizD4nL0ht1K3HHkqKCIWhKEqBJT+ESEgGbg94i/ZQyCl9RO6mwegQlaiSOXq94r0MXqJKXEhOEWWvL8YcXh2kSVAEeYkf6RYdiYVVkyvLg2CpCQhczaBKYjSDw5074eydplv8As+tCio6uMqUSRG4AmI4ACigZEk7+1Qy+p7jHojjjwImPdIbUTadhMn41mfiXMg2CuYPDpaLfGtC8QYmEG4kRblJ4+1YNn+Yqfc0i4khPXmay9LkaIK2DsVmOqQkW68aHKUaPnLm0p5niaCvog1NseqGxSwKSBSgaAw40b1esmSfLhFzGkAcZEn5TVEaTJAq9eDocdKTZCE+o9SpI/Qj40sp8ItnKPJ0EMuxPluJXwn1DmOPvxHUCtRW6kthSikpI3JA9weu/vWd5kWkhoOq0OLC4cj0L0kD1gXSq/wB4AzF+dEUoU9gl4Yk6pC2VpIUklEQgLFp9MC+5rI8imrRWMHDssDmbst2QdaoPpR6iYvAkxJ5TVA8ZZ3hsUUKbQtDqSQoqSkSnkSCZII48zXfCuYhSwy8kJVNlRx5Hp9PpccxyPBpdQ46lK3VRubHiFFP4j1PCsvvOMmpI0uC1RGwGGwmrD4p5aAvQkBKyAAvSkJXB/wBhgm0xxiri2Cq/zrOPET7eLxbLICD6ghIMhMC5BKRMHaRyFE83z44RXlLKWxGmEyBEQAFkiP8AxpIZa8DSgy24nN8M0rQ46kKG4ufjG1coR4fzvBBlIOhB46rlR/NqO81yr84/Ui4yMo8M4dPma1mEIuasbviNxxyUpAFggbkAWAHWhX9bhmkBASt68k/cSf8A9GrPl2PbU3qaabSAQUgJvPfeazZfk9mmGiVgsDiVn+4oNg/mIT8t6LYLw7hUYo4tx0uu20gxpRAAEDcmBQfCLklQTpJ3USVKPurb2qxZLhRxTPekj8egT+S2WRxpt9EKSFJ6jbtVD8YZU2wpBDDjkqBGhBIsRYnYGr+gpQLfCouJzptBg3UbBIuSa1R4NJzZmg521BaAruYY/Ej+2yjDIP4nlFS/ZCYj3NRm/CKFXfdW6dzshJPZN/nVnU5aVQOg4dOtRTipMaTtPD2Hfc1bV2kJtaKnjMpwJaxAbbSlSLBdyS4PVpBO4t235VlPiXN1rPlQEob9AjdZBNyeXTpWoZglDam2W5UElxTyj+JWnQQOovbrWSeJ8B5Dnlg21LUn/YTCPlNbXhpRk/P9QrdJkfCrA3n2oivEQiCIB2ve1/53qvB6KWHVLIH8FdQl0Lx7wUr07Uxh5ChFzO3OpowtpHv7/wCDWh/ZPkKPM/qHkApOoNah6eSnIPWEj/v6GhkmoRtgh8mU3w7nCsK9qIlBstPMcx1FbFlTCFaXmCNKwJj7qknpwI+RFZX9obmH/rnEsjSgTMXGobxHCQRRXwF4mGEIS4FKw6jfSCooO+oAXIPED2vu2K8itFJRpms5yyQUKSf7alJStIBIBkQq1x36JqJmb6Yfw6TqCGlazv6lgQPYJk/7q4rxthfJK2CpaiklA0KAJ4TIEX340PwQGDUguKU4cUo61i41ETcRtc1t9PgnH5NfhfXz/oRbZgbuHKVqbJAKSoXMTpnb4fOivhDN/wCmxKVkkIUFJWBxCkkCegJB52Nad40y7D4XB4yEN/3YUFKurX6UISmbmACQB/qJ41ioUbdKWbUJ3Em1ejfsH4kQtptttSkEla5SSApKSlJJI4SqP+2p+bY4qDSw6oKCTISoiSCQFwNyYO9Y/jcV/abxGGdKXEpbSpqDKUpAQYmy0lSpI5q+AhnO8Qt5Ki4om44AAHeBtwB9q0SzYoNOvv8AuThcjVfEmNcxKhhsOCpx4CTP3beq/ADn/qrK8Qwpp0pUIUhWkjkUkgj4itA+zLN0t4lQdlanEENqNyFJBWUj/cBbqAOND/tNwJRiEOAeh71TH4xZQPWZt3ryJeoc8tePBr9tRiB8S3A9qr2Kbg+9WZI8xnUbWIPeIPzmgOLTYVRMRoHV0CllFeSg0QD2D+8Dyn6VoXgLCODDOrSkkuLAFuCAf1X8qoOGYJISkSpRAA5k2Ar6O8MZYjDYVpkAFSEgqP8AqNyfiazepvjSHx92ygZ14TxWLfbbRpCGkgLcJgJWTqXYb8IA5cKtWReA2MOoLK3VuC5OsoST/sSbjuTR7E5m22kqUoISN1HYnkOZqg+IPHpcSpvDgoBJGs/eUOn5ZqEcdqissrQb8WY7CNILSUILpMjSB6SfxKVzNUx/GOXVOpWkhJJPpmB9Le9AnHCeJnievOpDGJmGz94wBJ351WWCNbEhmaZEwT7qX23ADrbWlSUwSSoGR3Bj61dU5PjscsuvhGHTxWtEKgcgfV8SKhZZjv6bEteoJBWAs7wkAlXyt3NH89zZzHaWsIlegn1LKSAeW/AXN+lI8UVWv3KPJOUrsZR4YwYHqU46TfWXUInsOXWuU4n7N2VAHEYhwuHfSoAf+1zXqPx+v8CmfHDSanYbzG0hKDA3iKn4HL1LMJE/SijjuGw/3z5jg/CnYdzXnOTZuPeGspxDzgcUCoJ2k6UA9edWjGZizh48x8KWPwN/qao2b+L3Fp0Nkto/Km09zVdKnHDaaaOOUukI6W5MueceO1GQj0j4n40/9n5U84rEOyYsgHmd1fpQfIPA7rxCljSjmbf5rTsrylvDoCU8ONXjgUdvsSWbXGJMdRqgdd+VVDxfmCy6lpqdSVajpJGwGkEjhGonvVvU5AJqjYfCIecfcXqUCFaBcaiZvbgI26irx0yFAnMMz1OEhKUJTKfSdUmTKioiVSaCZ5lIxaQUFPnoFhMak/l/aimRZWvFK0IEROonZIBiT+1W5XhXBNaVOLVqA/PEz/pFbV6hJcZbJOLs+fsVhloUUuJKFDgoQf8AFTmMNpEEQeog1smb51hmVBLLCHFoI9axqgWnSoyZiqp9oS2HnEvMEqXZLgAMf6TPPhRT3paJzX3KeqronxZiSyhKW2ENlJSnSiCjRb0Em0WIMWI6VXMBgSVJ1pOmb2P8ipObYF9t0rKQAJIuAnRyAMWiLDb2p54Yzxty78E8eTjNLx5E+GvCRxWK8tRIESTE+nir9I51Cx2Bcw2JVhxdSVFIJEWFgoHhxvVm8E5wEYxhSbhzUg9iOPuB8Kn/AGk5c7/UpebEKgHvpJAg9QE25lVZMMm5qMjblqKdGZvYp1txehwp9R+7ISTME6Ta++1XLK/tGIbQ3iG1q8vYthJ1wLagojSOxPahOc5G55kaADpSVGUpClETZP8ALzXm/CS9UFxqeWq/yFek5yxyaT0Yoy5RsBZ3mr+KcLjyyokqIF9KdRkhCeA4dgOVQA0Zq4ueGVD8SPaf2pxnw8RvFSe3bDYMwGDXrdSlOpWhSW0AyFAyIG+qxCgOOmn8p8MuBK3FiItHG+/vA233okMGoHSlQtyJqbhEPsrCwsn1JkFRMgqG4O4H0mtLeOemT+adoqrWO8kE+oKbWnQoDilQUL8Ij4Vp/ihg4/C60RHlpWnb0ujVM8gRb3p/xV4cwgwjrhSEE+pIG8FQG08yO1UXLM2xYBbZXACYiE7SSAbXMk3PM142SKlL9PuzfGdrf0A2FzEhJYUNIiBz1dTOx7WmlP4bU0lQ3Ez8aiON+YrUVCVXM2vJvyonl+GcR6EDXqIkQTwgJTG5M1o6J9gNoQqDRrJ8gexKtLKJ5qNkjur+Grtk32fJu7ihAA1eWDtx9ZH0Hxq9eH8Q0WwlHlpjVCElNkgwDpG1JLPS0csf1AXhDwU3hYWoBx785Fk9EA7d96sWcYsNNqUq8JJ0CxVsIHckCetTGXEkkpvwKuFuAPH2qq+IMQXMPinREoUppJF/SkglXfhWe3J7H6Wim+MM98/y0TdIlcfdCj+BPRI48TNV1Arq+tS8GiPVa177ADdR6CtuOF1FGft2xOHwLjhhFuJJ2SOZNSMKlpp0BsqxDnHQJvySaG5tmpxLgbbJSwkXCfT5h4kxwPKr/wDZxknk/wB9SCCRCEkRKTBKwePar5J4sFpLk/4GiregNiMBiinzHmCgJmISfSDB9R4nrSsVmqvLQ2hRAAvHpv7b9zWujSpPBSSPY1nHjbI2mtS2FJ17lkm8c0fsawKUssui3SK8FawFKWSqLkma9VcGY9Ir1N7YnufYPZh4jWoFDY8tHJO57mhDepRtemcOnUuDVu8NYBC3koUPTy51mx4FXJmmWV3SI2ReGXHz6UyOJNkj3rSMl8KMsAFQC1cyLDsKOYdhKEhKQEgbAU3iDNuFM5eFol2xzzBHSm1OU1TrTYNKN0DszUpTK9IuRAHe1RclyVaQS6reISOAjaasIbHKkuqgV1gszDO//lW3h0lDabEJKvUeJVG96C4XE+ozrlP5goe0mtC8TZkrDNlbSUBR3On59azXMs0deWFOLKjbkBe+wrVik2vsTmghljaCVKfXpEySLqN9kjh3pfiHNWlsKw2GZDaCUnWfvKKTMn3qNhRKaTiE1oS3ZMC4bxUW/SvDtqIsZHH4Up7xWp30qab0cEwJHY0xnmHTCFRchQPtEfWhuDwwLiE3hSkg9iqLU8m8btCOCYcw+SqdadfkBpCgBNtaiYGkdrmmWg6CNOpUGBJkJnlNk7GrR4mPlhphACW0gkADkSPfie5NDPCKpxZbN0uhTah0KFGRyUCAQaw4ssXPlLo15IP29dkLNM+V6AkyQgJUr8xE3uPb2oec4cmQY7WnvUJYsK9Fb8j+RijFJUEG89eHEHuBSlZ+6eQoVXKSxqQQOcuc6KZDiXHHLk6U3M8YvHSTA96rRoll2dLZQUpSg3F1AzxMWIkTBvyFTyOXH49jwS5bLl42zpLgS2DEJSVn82gECY3ElRjtVby98+Q6tAAU2pJUCd21ekHqUqA/8+lC3Met9wLcidoSkJECSBAoplGBQ9iWm1j0mSQLTHWs2ODg0Wk1KLF5D4acxSpEJRYlR63tzNadkeXs4VI0JKjsVRKj2/YU2EBCUtoASnaEiKK4VRAsY4cOVHJKwQQGzFzGYiW0p8tCjcmAAOfNRphaMNlrOkytxdyNlOHmfyoqx4d0lCnDciY5W6Vl3ihwnFvEkmFwJ4AbChjXJ14Bkair8jma+JsQ+NJXoRwQj0pHS1z71EynEq1FAJ0kGRNidrjjQt1cAmkuOFCStO6bj/mtHC/ijOpO7Y/iG9BOogAHfhQnMM0U9DaLN/NfU9OlCsXjVuqlap6bD4UYyhgaNUXkj2qifBaDd9EzDNBIAFav4Xz4KSMLiQUOoCYmxIj0kVnOQtBeJZQrZTiQfjWhfangkjDDEplLzSkhKhaxOx5isuTbSKw0rLCsvo1aEp6SZC+oA+6rpxqmYpa38c+oJCkoSUmBzED33ok14ieRlpe9JWNEagSLgcJqp+Bs4dcx6tRELEKAEA3F453Ndj1GQze0gTj/AAU9rJZGps3TJuJ4HtXq2MNAbDrXqHuM7ij/2Q==',
    10,
    [
      'Vida: 575.00',
      'Regeneración de vida: 9.00',
      'Armadura: 27.00',
      'Resistencia mágica: 32.00',
      'Maná: 400.00',
      'Regeneración de maná: 8.00',
      'Daño de ataque: 61.00',
      'Velocidad de ataque: 0.645'
    ],
    [
      'Es posible que Sylas de Dregbourne, ',
      'mago nacido en una familia pobre de Demacia,',
      'estuviera condenado desde el principio. ',
      'A pesar de su bajo estatus social, ',
      'sus padres creían firmemente en los ideales de su nación.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Classic Hamburger',
    'pricey',
    'simple',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true
  )
];