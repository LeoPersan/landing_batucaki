import test from 'node:test';
import assert from 'node:assert/strict';
import { projectDetails, speakers, culturalCommitments, conductorBio } from '../src/data/projectData.js';

test('Content Integrity: projectDetails matches official PNAB submission', () => {
  assert.equal(projectDetails.name, 'Tupi em Consciência: Samba, Memória e Vozes Negras');
  assert.equal(projectDetails.date, '2026-11-20');
  assert.equal(projectDetails.city, 'Tupi Paulista — SP');
  assert.equal(projectDetails.location, 'Praça Prefeito Dr. Ilton da Costa Oliveira');
  assert.equal(projectDetails.duration, '2 horas');
  assert.equal(projectDetails.isFree, true);
});

test('Content Integrity: speakers contains the 3 regional Afro-Brazilian leaders', () => {
  assert.equal(speakers.length, 3, 'Should have exactly 3 prominent regional speakers');

  const ricardo = speakers.find(s => s.name.includes('Ricardo Aparecido dos Reis'));
  assert.ok(ricardo, 'Ricardo Reis must be present');
  assert.ok(ricardo.role.includes('Advogado'), 'Ricardo role must be Advogado');

  const deocelia = speakers.find(s => s.name.includes('Deocélia Batista de Souza'));
  assert.ok(deocelia, 'Deocélia Souza must be present');
  assert.ok(deocelia.role.includes('Professora') || deocelia.role.includes('Educadora'), 'Deocelia role must be Professora/Educadora');

  const jaba = speakers.find(s => s.name.includes('Mestre Jabá'));
  assert.ok(jaba, 'Mestre Jabá must be present');
  assert.ok(jaba.role.includes('Capoeira') || jaba.organization.includes('Dendê Maré'), 'Mestre Jabá must reference Capoeira/Dendê Maré');
});

test('Content Integrity: culturalCommitments and conductorBio are fully detailed', () => {
  assert.equal(culturalCommitments.length, 5, 'Should have 5 cultural commitments');
  
  assert.equal(conductorBio.name, 'Clodoaldo Carvalho de Jesus');
  assert.ok(conductorBio.degrees.some(d => d.includes('UNIFADRA')), 'Degrees must include UNIFADRA');
  assert.ok(conductorBio.degrees.some(d => d.includes('UNOESTE')), 'Degrees must include UNOESTE');
  assert.ok(conductorBio.experience.some(e => e.includes('Mocidade Independente de Carapicuíba')), 'Must mention Mocidade Independente');
});
