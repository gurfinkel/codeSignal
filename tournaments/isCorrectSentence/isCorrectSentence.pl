#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isCorrectSentence {
    my ($inputString) = @_;

    my @store = split '', $inputString;

    return 'A' le $store[0] && 'Z' ge $store[0] && '.' eq $store[@store - 1];
}
